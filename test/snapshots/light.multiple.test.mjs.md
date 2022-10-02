# Snapshot report for `test/light.multiple.test.mjs`

The actual snapshot is saved in `light.multiple.test.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## should generate multiple light icons

> Snapshot 1

    [
      'assets/favicon.png',
      'index.html',
      'main.js',
      'second/favicon.png',
    ]

> Snapshot 2

    [
      {
        assetName: 'assets/favicon.png',
        content: 'png 874x989',
      },
      {
        assetName: 'index.html',
        content: `␊
        <!doctype html>␊
        <html>␊
          <head>␊
            <link␊
              rel="icon"␊
              href="/assets/favicon.png"␊
            >␊
            <link␊
              rel="icon"␊
              href="/second/favicon.png"␊
            >␊
          </head>␊
          <body>␊
          </body>␊
        </html>␊
        `,
      },
      {
        assetName: 'second/favicon.png',
        content: 'png 874x989',
      },
    ]