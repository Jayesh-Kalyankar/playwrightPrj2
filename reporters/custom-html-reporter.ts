import type {
  Reporter,
  TestCase,
  TestResult,
  FullResult
} from '@playwright/test/reporter';
import fs from 'fs';
import path from 'path';

export default class CustomHtmlReporter implements Reporter {
  private results: any[] = [];
  private startTime!: number;

  onBegin() {
    this.startTime = Date.now();
  }

  onTestEnd(test: TestCase, result: TestResult) {
    this.results.push({
      title: test.title,
      status: result.status,
      duration: result.duration,
      error: result.error?.message || ''
    });
  }

  onEnd(result: FullResult) {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);

    const html = this.generateHTML(duration);

    const reportDir = path.join(process.cwd(), 'test-results', 'html-report');
    fs.mkdirSync(reportDir, { recursive: true });

    fs.writeFileSync(path.join(reportDir, 'report.html'), html);
  }

  generateHTML(duration: string) {
    return `
    <html>
    <head>
      <title>Playwright Test Report</title>
      <style>
        body { font-family: Arial; padding: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 10px; }
        th { background: #333; color: white; }
        .passed { color: green; }
        .failed { color: red; }
      </style>
    </head>
    <body>
      <h2>Playwright Execution Report</h2>
      <p>Total Duration: ${duration}s</p>
      <table>
        <tr>
          <th>Test</th>
          <th>Status</th>
          <th>Duration(ms)</th>
          <th>Error</th>
        </tr>
        ${this.results
          .map(
            t => `
          <tr>
            <td>${t.title}</td>
            <td class="${t.status}">${t.status}</td>
            <td>${t.duration}</td>
            <td>${t.error}</td>
          </tr>`
          )
          .join('')}
      </table>
    </body>
    </html>
    `;
  }
}
