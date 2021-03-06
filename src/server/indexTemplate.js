export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>React Learn</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  </head>
  <script src="/static/client.js" type="application/javascript"></script>
  <script >
    window.__token__ = '${token}';
  </script>
  <body>
    <div id="react_root">${content}</div>
  </body>
</html>
`;
