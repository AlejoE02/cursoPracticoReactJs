jQuery.ajax({
  type: "POST",
  url: "https://traffik.tars.dev:3001/",
  data: {
    database: "trafico_diario",
    fields: [
      "usuario",
      "id_gitlab",
      "horas",
      "actividades",
      "fecha",
      "fase",
      "nombre_del_proyecto"
    ],
    filter: {
      usuario: "diego"
    },
    token:
      "sP0llot0mWlhsS2FHSkhZMmxQYVVwSlZYcEpNVTVwU2prdVpYbEtNR0l5ZEd4aWFVazJTV3BHVldGcmVIWlhSRmt3VmpOb2FHRllVbEZXUld4QP0lloZESmFSRkP0llo3VWtSaFZFcFJaVlJrUkdSSE9UUlVlbG8yVFVWUP0llodsbFhiR3BhTVVaSlpGaE9jRnBYUmP0llooSmFYZHBXa2RHTUZsWFNtaGpNbFZwVDJsS0P0lloGbFlTbnBNVkVKMFkza3hhR05JUVdsbVVTNWhiMjlDUkd3M09XSldWSE5SZDBwcP0llodFSjJRbGxOWkVkTE5EUTBibTVJWmP0llowdVFXUlZlVkJRVEdGbg==0m0lds",
    limit: "10",
    sort_desc: "fecha"
  },
  success: function(res) {
    console.log(res);
  }
});
