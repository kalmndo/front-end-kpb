export default [
  {
    path: 'fitur/:idRole/:idLayanan/:idFitur/pekebun/pengajuan',
    name: 'pengajuanKlinikPerkebunan',
    component: () => import('src/pages/member/klinikperkebunan/FormPengajuanKlinikPerkebunan.vue')
  },
  {
    path: 'fitur/:idRole/:idLayanan/:idFitur/pekebun/riwayat',
    name: 'riwayatPengajuanKlinikPerkebunan',
    component: () => import('src/pages/member/klinikperkebunan/RiwayatPengajuanKlinikPerkebunan.vue')
  },
  {
    path: 'fitur/:idRole/:idLayanan/:idFitur/pekebun/riwayat/:id',
    name: 'detailPengajuanKlinikPerkebunan',
    component: () => import('src/pages/sharedpages/klinikperkebunan/Detail.vue')
  },
  {
    path: 'fitur/:idRole/:idLayanan/:idFitur/pekebun/artikel',
    name: 'artikelKlinik',
    component: () => import('src/pages/sharedpages/klinikperkebunan/ListArtikel.vue')
  },
  {
    path: 'fitur/:idRole/:idLayanan/:idFitur/pekebun/artikel/:id',
    name: 'detailKlinikArtikel',
    component: () => import('src/pages/sharedpages/klinikperkebunan/Artikel.vue')
  }
]
