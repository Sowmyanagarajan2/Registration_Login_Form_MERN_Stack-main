// import React from 'react';
import { Link } from "react-router-dom";
<link rel="stylesheet" href="style.css" />
const Home = () => {
  return (
    <div style= {
      {backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>PROFILE</h1>
        <div>
		<div class="main-body">
			<div class="row">
				<div class="col-lg-3">
				<div class="card">
			<div class="card-body">					
<div class="d-flex flex-column align-items-center text-center">
<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="100"/>
				<div class="mt-3">
				<h4>John Doe</h4>
					<p class="text-secondary mb-1">Full Stack Developer</p>
									<button class="btn btn-primary">Follow</button>
								</div>
							</div>
							<hr class="my-4"/>
							</div>
					</div>
				</div>
				<div class="col-lg-8">
					<div class="card">
						<div class="card-body">
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Full Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="John Doe"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="john@example.com"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="(239) 816-9029"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mobile</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="(320) 380-4539"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="Bay Area, San Francisco, CA"/>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" value="Save Changes"/>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
															</div>
                              <Link to='/login' className="btn btn-light my-5">Logout</Link>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		</div>
  )
}

export default Home