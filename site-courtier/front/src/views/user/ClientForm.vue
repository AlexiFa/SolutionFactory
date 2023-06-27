<template>
    <!-- <div class="card text-center" style="width: 35rem;">
        <div class="card-body">
            <div class="container text-center">
                <div class="NewForm">
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="mb-1">
                        <label for="formFileMultiple" class="form-label">Justificatif d'identité (pièce d'identité recto/verso / Passeport)</label>
                        <input class="form-control" type="file" id="idcard" multiple>
                    </div>
                    <div class="mb-2">
                        <label for="formFileMultiple" class="form-label">Justificatif de Domicile datant de moins de 3 mois</label>
                        <input class="form-control" type="file" id="domicile" multiple>
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">2 derniers avis d'imposition</label>
                        <input class="form-control" type="file" id="impot" multiple>
                    </div>
                    <div class="mb-4">
                        <label for="formFileMultiple" class="form-label">3 derniers bulletins de salaire</label>
                        <input class="form-control" type="file" id="bulsalaire" multiple>
                    </div>
                    <div class="mb-4">
                        <label for="formFileMultiple" class="form-label">3 derniers relevés de compte en banque</label>
                        <input class="form-control" type="file" id="relevecompte" multiple>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="container text-center">
        <div class="row">
            <div class="col">
            
            </div>
            <div class="col-8">
                <form class="row g-3">
                    
                    <div class="col-12">
                        <br><br><br>
                        <label for="inputAddress" class="form-label"><strong>Addresse</strong></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label"><strong>Addresse 2</strong></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartement, studio, ou étage">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label"><strong>Ville</strong></label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label"><strong>Département</strong></label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Auvergne-Rhône-Alpes</option>
                        <option>Bourgogne-Franche-Comté</option>
                        <option>Bretagne</option>
                        <option>Centre-Val de Loire</option>
                        <option>Corse</option>
                        <option>Grand-Est</option>
                        <option>Guadeloupe</option>
                        <option> Guyane</option>
                        <option>Hauts-de-France</option>
                        <option>Île-de-France</option>
                        <option>La Réunion</option>
                        <option>Martinique</option>
                        <option>Mayotte</option>
                        <option>Normandie</option>
                        <option>Nouvelle-Aquitaine</option>
                        <option>Occitanie</option>
                        <option>Pays de la Loire</option>
                        <option>Provence-Alpes-Côte d'Azur</option>>
                        </select>
                        <br>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label"><strong>Code Postale</strong></label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>

                    <div class="mb-1">
                        <label for="formFileMultiple" class="form-label"><strong>Justificatif d'identité</strong> (pièce d'identité recto/verso / Passeport)</label>
                        <input class="form-control" type="file" id="idcard" multiple>
                    </div>
                    <div class="mb-2">
                        <label for="formFileMultiple" class="form-label"><strong>Justificatif de Domicile</strong> (datant de moins de 3 mois) </label>
                        <input class="form-control" type="file" id="domicile" multiple>
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label"><strong>2 derniers avis d'imposition</strong></label>
                        <input class="form-control" type="file" id="impot" multiple>
                    </div>
                    <div class="mb-4">
                        <label for="formFileMultiple" class="form-label"><strong>3 derniers bulletins de salaire</strong></label>
                        <input class="form-control" type="file" id="bulsalaire" multiple>
                    </div>
                    <div class="mb-4">
                        <label for="formFileMultiple" class="form-label"><strong>3 derniers relevés de compte en banque</strong></label>
                        <input class="form-control" type="file" id="relevecompte" multiple>
                    </div>


                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Envoyer</button>
                    </div>
                    <br>
                </form>


            </div>
            <div class="col">
            
            </div>
        </div>
    </div>

</template>
  