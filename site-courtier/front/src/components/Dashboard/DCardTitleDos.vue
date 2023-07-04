<template>
    <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content:space-between; height:100%;">
        <h3 style="margin-top: 10%;">Dossier : {{ dossier.Id_Dossier }}</h3>
    </div>
</template>

<script>
export default {
    name: 'DCardClient',
    props: ['dossier']
}
</script>