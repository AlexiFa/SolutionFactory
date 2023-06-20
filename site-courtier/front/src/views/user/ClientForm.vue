<template>
    <div class="NewForm">
    </div>
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
</template>
  