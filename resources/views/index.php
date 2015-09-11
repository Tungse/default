<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" type="text/css" href="style.min.css" />
        <script language="Javascript" type="text/Javascript" src="bundle.min.js"></script>
        <link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                color: #B0BEC5;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
                margin-bottom: 40px;
            }

            .quote {
                font-size: 24px;
            }
        </style>
    </head>
    <body ng-app="testApp" ng-controller="ArticlesCtrl">
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5</div>
                <div class="quote"></div>
                <table class="table">
                    <tr ng-repeat="article in articles | filter:search">
                        <td>{{article.id}}</td>
                        <td>{{article.name}}</td>
                        <td>{{article.price}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <script type='text/javascript' id="__bs_script__">//<![CDATA[
            document.write("<script async src='http://HOST:1337/browser-sync/browser-sync-client.2.8.2.js'><\/script>".replace("HOST", location.hostname));
        //]]></script>
    </body>
</html>
