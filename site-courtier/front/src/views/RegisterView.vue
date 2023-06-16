<template>
    <div class="container card" style="padding: 2%;width: 40%;background-color: #588B8B;">
        <form class="row g-5" action="/login">
            <div class="col-12">
                <p class="h3">Register</p>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="inputFirstNameLG" placeholder="First name">
                    <label for="inputFirstNameLG">First name</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="inputLastNameLG" placeholder="Last name">
                    <label for="inputLastNameLG">Last name</label>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input type="email" class="form-control" id="inputEmailLG" placeholder="Email">
                    <label for="inputEmailLG">Email</label>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input type="password" class="form-control" id="inputPasswordLG" placeholder="Password">
                    <label for="inputPassword">Password</label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary fs-4" style="background-color: #E9C46A;border-color: #588B8B;color: black;">Sign in</button>
            </div>
        </form>
    </div>
</template>