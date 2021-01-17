var http = require('http');
var fs = require('fs');
var url = require('url');
function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">Rooibos_Investment</a></h1>
    <div id="grid">
        <div id="leftbox">
          <input type="button" value="night" onclick="dayNightHandler(this)">
          ${list}
        </div>
        <div id="article">
        <a href="/create">create</a>
        ${body}
        </div>
    </div>
  </body>
  </html>`;
}
function templateList(filelist){
  var list = '<ol>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i +1;
  }
  list = list + '</ol>';
  return list;
}
var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if(pathname === '/'){
    if(queryData.id === undefined){
        fs.readdir('./data', 'utf8', function(error, filelist){
          var title = 'Intro';
          var description = '금융시장의 각 분야를 추종하는 ETF에 대해 현재 시장의 상황, 변수, 투자의견을 게시합니다.';
          var list = templateList(filelist);
          var html = templateHTML(title, list, `${description}`);
                response.writeHead(200);
                response.end(html);
          })
      } else {
        fs.readdir('./data', 'utf8', function(error, filelist){
          fs.readFile(`data/${queryData.id}`,`utf8`, function(error, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var html = templateHTML(title, list, `${description}`);
              response.writeHead(200);
              response.end(html);
            });
        });
    }

  } else if (){pathname === '/create'
    fs.readdir('./data', 'utf8', function(error, filelist){
        var title = 'Rooibos_Investment'
        var list = templateList(filelist);
        var template = templateHTML(title, list, `
          <form action="/process_create" method="post"">
            <p>
              <input type="text" name="title" placeholder="title">
            </p>
          </form>
          `);
    });
  }else {
    response.writeHead(404);
    response.end('Not found');
  }

});
app.listen(3000);


// 22분 38초부터 진행하면 된다 .  CREAT ..//
