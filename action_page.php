<!DOCTYPE html>
<html>
<head>
	<title>Not the Library Cafe</title><!--link rel="stylesheet" type="text/css" href="INSERTSTYLESHEETLINK"-->
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"><!---Open source font from google=-->
	<link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet"><!--Custom Stylesheet (ours)-->
	<link href='./Stylesheets/style.css' rel='stylesheet' type='text/css'><!--Bootstrap CSS-->
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet"><!--JQuery JS for Bootstrap -->

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js">
	</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js">
	</script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js">
	</script>
</head>
<body>
	<nav class="navbar navbar-expand-sm navbar-light bg-light">
		<a class="navbar-brand" href="#"></a><a class="navbar-brand" href="#"><img alt="notthelibrarycafe" src="./images/logo.png" width="500px"></a> <button aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarsExample03" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarsExample03">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item dropdown">
					<a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" id="dropdown03">Contribute</a>
					<div aria-labelledby="dropdown03" class="dropdown-menu">
						<a class="dropdown-item" href="./findpoint.html">Add a place (students)</a> <a class="dropdown-item" href="#">Get involved (businesses)</a>
					</div>
				</li>
			</ul>
			<form class="form-inline my-2 my-md-0">
				<input class="form-control" placeholder="Search" type="text">
			</form>
		</div>
	</nav>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 text-center">
				<form>
					<div class="form-group">
						<h2>Current Latitude & Longitude:<br></h2>
						<p class="form-control" id="latlng"><br></p><label for="placename">Place Name</label> <input class="form-control" id="placename" type="placename">
					</div>
					<div class="form-group">
						<label for="placedesc">Place Description</label> <input class="form-control" id="placedesc" type="placedesc">
					</div><button class="btn btn-default" type="submit">Submit</button>
				</form>
			</div>
		</div>
	</div>
	<script src="./select_place.js">
	</script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL8uZACjkHMb32pPJbdmprNKSWVa02EQo&callback=initMap">
	</script>
</body>
</html>
