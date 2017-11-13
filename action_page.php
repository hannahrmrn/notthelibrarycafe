<!DOCTYPE html>
<html>
  <head>
    <title>Not the Library Cafe</title>
    <!--link rel="stylesheet" type="text/css" href="INSERTSTYLESHEETLINK"-->

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!---Open source font from google--->
    <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet">
    <!--Custom Stylesheet (ours)-->
    <link rel='stylesheet' type='text/css' href='./Stylesheets/style.css'>
    <!--Bootstrap CSS-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <!--JQuery JS for Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

  </head>

  <body>


        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <a class="navbar-brand" href="#"><a class="navbar-brand" href="#"><img src="./images/logo.png" alt="notthelibrarycafe" width=500px></a></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample03">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contribute</a>
                <div class="dropdown-menu" aria-labelledby="dropdown03">
                  <a class="dropdown-item" href="./findpoint.html">Add a place (students)</a>
                  <a class="dropdown-item" href="#">Get involved (businesses)</a>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-md-0">
              <input class="form-control" type="text" placeholder="Search">
            </form>
          </div>
        </nav>

  <div class="container-fluid">
  <div class="row">
  <div class="col-sm-12 text-center">
      <form>
      <div class="form-group" action="/action_page.php" method="post">
      <h2>Current Latitude & Longitude:</br></h2>
      <p id = "latlng" name = "position" class="form-control"></br></p>
          <label for="placename">Place Name</label>
          <input type="placename" class="form-control" id="placename">
        </div>
        <div class="form-group">
          <label for="placedesc">Place Description</label>
          <input type="placedesc" class="form-control" id="placedesc">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
  </div>
  </div>
</div>

    <script src = "./select_place.js" > </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL8uZACjkHMb32pPJbdmprNKSWVa02EQo&callback=initMap">
    </script>

  </body>


</html>
