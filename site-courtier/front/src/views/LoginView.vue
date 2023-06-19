<template>
    <div class="container card" style="padding: 2%;width: 40%;background-color: #588B8B;">
        <form class="row g-5" action="/">
            <div class="col-12">
                <p class="h3">Login</p>
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