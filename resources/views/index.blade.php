<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Website Covid 19 Laravel 7 Menggunakan Ajax dan API dari Kawal Corona. Dibuat leh Adhi Ariyadi / Didotz Tahun 2020">
  <link rel="canonical" href="https://covid-19.ipanel.id/">
  <meta property="og:locale" content="id_ID">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Home Covid 19">
  <meta property="og:description" content="Website Covid 19 Laravel 7 Menggunakan Ajax dan API dari Kawal Corona. Dibuat leh Adhi Ariyadi / Didotz Tahun 2020">
  <meta property="og:url" content="https://covid-19.ipanel.id/">
  <meta property="og:site_name" content="Home Covid 19">
  <meta property="og:image" content="https://covid-19.ipanel.id/">
  <meta property="og:image:secure_url" content="https://covid-19.ipanel.id/">
  <meta name="description" content="Website Covid 19 Laravel 7 Menggunakan Ajax dan API dari Kawal Corona. Dibuat leh Adhi Ariyadi / Didotz Tahun 2020">
  <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
  <title>COVID 19</title>

  <!-- General CSS Files -->
  <link rel="stylesheet" href="{{ asset('assets/modules/bootstrap/css/bootstrap.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/modules/fontawesome/css/all.min.css') }}">

  <!-- CSS Libraries -->
  <link rel="stylesheet" href="{{ asset('assets/modules/bootstrap-daterangepicker/daterangepicker.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/modules/select2/dist/css/select2.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/modules/jquery-selectric/selectric.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css') }}">

  <!-- Template CSS -->
  <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/css/components.css') }}">
  <style>
    .box-body {
      height: 661px;
    }
    .box-diagram {
      height: 661px;
    }
    .box-data {
      height: 85px;
    }
    #prov-indo {
      visibility: hidden;
    }
    .tampil {
      visibility: visible !important;
    }

    @media (max-width: 1024px) {
      .main-content {
        margin-top: -50px;
      }
    }

    @media (min-width: 1024px) {
      .main-content {
        margin-top: -150px;
      }
    }
  </style>
<!-- Start GA -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-94034622-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-94034622-3');
</script>
<!-- /END GA --></head>

<body class="layout-3 mt-3">
  <div id="app">
    <div class="main-wrapper">
      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
          <h1 class="text-center text-uppercase">Covid 19</h1>
          <p class="lead m-0 text-center mb-5">Coronavirus Global & Indonesia Live Data</p>

          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card bg-warning img-card">
                  <div class="card-body">
                    <div class="d-flex box-data">
                      <div class="text-white">
                        <p class="text-white mb-0" id="name-positif"></p>
                        <h2 class="mb-0 number-font" id="val-positif"></h2>
                        <p class="text-white mb-0">ORANG</p>
                      </div>
                      <div class="ml-auto"><img src="{{ asset('img/sad-u6e.png') }}" width="50" height="50" alt="Positif"> </div>
                    </div>
                  </div>
                </div>
              </div><!-- COL END -->
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card bg-success img-card">
                  <div class="card-body">
                    <div class="d-flex box-data">
                      <div class="text-white">
                        <p class="text-white mb-0" id="name-sembuh"></p>
                        <h2 class="mb-0 number-font" id="val-sembuh"></h2>
                        <p class="text-white mb-0">ORANG</p>
                      </div>
                      <div class="ml-auto"><img src="{{ asset('img/happy-ipM.png') }}" width="50" height="50" alt="Positif"> </div>
                    </div>
                  </div>
                </div>
              </div><!-- COL END -->
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card bg-danger img-card">
                  <div class="card-body">
                    <div class="d-flex box-data">
                      <div class="text-white">
                        <p class="text-white mb-0" id="name-meninggal"></p>
                        <h2 class="mb-0 number-font" id="val-meninggal"></h2>
                        <p class="text-white mb-0">ORANG</p>
                      </div>
                      <div class="ml-auto"><img src="{{ asset('img/emoji-LWx.png') }}" width="50" height="50" alt="Positif"> </div>
                    </div>
                  </div>
                </div>
              </div><!-- COL END -->
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card bg-info img-card">
                  <div class="card-body">
                    <div class="d-flex box-data">
                      <div class="text-white">
                        <h4 class="mb-2 number-font text-uppercase" id="name-indonesia"></h4>
                        <p class="text-white mb-0" id="val-indonesia" style="font-family: sans-serif; font-size: 11px; font-weight: 400;"></p>
                      </div>
                      <div class="ml-auto"><img src="{{ asset('img/indonesia-PZq.png') }}" width="50" height="50" alt="Positif"> </div>
                    </div>
                  </div>
                </div>
              </div><!-- COL END -->
              <div class="col text-center"><strong><p id="Date"></p></strong></div>
            </div>
          </div>

            <div class="section-body">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="header-box textMed darkColor">Data Kasus Coronavirus Berdasarkan Wilayah</h3>
                      </div>
                      <div class="card-body">
                        <div class="form-group">
                          <label for="select-all-negara">Pilih Negara</label>
                          <select class="form-control select2" id="select-all-negara">
                            <option value="">-- Pilih Negara --</option>
                          </select>
                        </div>
                        <div id="prov-indo" class="form-group">
                          <label for="select-all-provinsi">Pilih Provinsi</label>
                          <select class="form-control select2" id="select-all-provinsi">
                            <option value="">-- Pilih Provinsi --</option>
                          </select>
                        </div>
                        <canvas id="piechart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="section-body">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="header-box textMed darkColor">Data Kasus Coronavirus Global</h3>
                      </div>
                      <div class="card-body">
                        <div class="box-body" style="overflow-x:auto;">
                          <table class="table borderless table-bordered table-hover">
                            <thead>
                              <tr>
                                <th class="darkColor">No</th>
                                <th class="darkColor">Negara</th>
                                <th class="darkColor">Positif</th>
                                <th class="darkColor">Sembuh</th>
                                <th class="darkColor">Meninggal</th>
                              </tr>
                            </thead>
                            <tbody id="all-data">
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="section-body">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="header-box textMed darkColor">Data Kasus Coronavirus di Indonesia</h3>
                      </div>
                      <div class="card-body">
                        <div class="box-body" style="overflow-x:auto;">
                          <table class="table borderless table-bordered table-hover">
                            <thead>
                              <tr>
                                <th class="darkColor">No</th>
                                <th class="darkColor">Umur</th>
                                <th class="darkColor">Gender</th>
                                <th class="darkColor">Status</th>
                                <th class="darkColor">Warga Negara</th>
                              </tr>
                            </thead>
                            <tbody id="all-pasien-data">
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="section-body">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="header-box textMed darkColor">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h3>
                      </div>
                      <div class="card-body">
                        <div class="box-body" style="overflow-x:auto;">
                          <table class="table table-bordered table-hover">
                            <thead>
                              <tr>
                                <th class="darkColor">No</th>
                                <th class="darkColor">Provinsi</th>
                                <th class="darkColor">Positif</th>
                                <th class="darkColor">Sembuh</th>
                                <th class="darkColor">Meninggal</th>
                              </tr>
                            </thead>
                            <tbody id="provinsi-data">
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
      <footer class="main-footer">
        <div class="container">
          <div class="footer-left">
            <strong>Copyright &copy; 2018 <div class="bullet"></div> Design By <a href="https://github.com/Didotz" target="_blank">Didotz</a> & API By <a href="https://kawalcorona.com/">Kawal Corona</a></strong>
          </div>
        </div>
      </footer>
    </div>
  </div>

  <!-- General JS Scripts -->
  <script src="{{ asset('assets/modules/jquery.min.js') }}"></script>
  <script src="{{ asset('assets/modules/popper.js') }}"></script>
  <script src="{{ asset('assets/modules/tooltip.js') }}"></script>
  <script src="{{ asset('assets/modules/bootstrap/js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('assets/modules/nicescroll/jquery.nicescroll.min.js') }}"></script>
  <script src="{{ asset('assets/modules/moment.min.js') }}"></script>
  <script src="{{ asset('assets/js/stisla.js') }}"></script>

  <!-- JS Libraies -->
  <script src="{{ asset('assets/modules/cleave-js/dist/cleave.min.js') }}"></script>
  <script src="{{ asset('assets/modules/cleave-js/dist/addons/cleave-phone.us.js') }}"></script>
  <script src="{{ asset('assets/modules/jquery-pwstrength/jquery.pwstrength.min.js') }}"></script>
  <script src="{{ asset('assets/modules/bootstrap-daterangepicker/daterangepicker.js') }}"></script>
  <script src="{{ asset('assets/modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js') }}"></script>
  <script src="{{ asset('assets/modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js') }}"></script>
  <script src="{{ asset('assets/modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js') }}"></script>
  <script src="{{ asset('assets/modules/select2/dist/js/select2.full.min.js') }}"></script>
  <script src="{{ asset('assets/modules/jquery-selectric/jquery.selectric.min.js') }}"></script>
  <script src="{{ asset('assets/modules/simple-weather/jquery.simpleWeather.min.js') }}"></script>
  <script src="{{ asset('assets/modules/chart.min.js') }}"></script>
  <script src="{{ asset('assets/modules/jqvmap/dist/jquery.vmap.min.js') }}"></script>
  <script src="{{ asset('assets/modules/jqvmap/dist/maps/jquery.vmap.world.js') }}"></script>
  <script src="{{ asset('assets/modules/chocolat/dist/js/jquery.chocolat.min.js') }}"></script>

  <!-- Page Specific JS File -->
  <script src="{{ asset('assets/js/page/forms-advanced-forms.js') }}"></script>

  <!-- Template JS File -->
  <script src="{{ asset('assets/js/scripts.js') }}"></script>
  <script src="{{ asset('assets/js/custom.js') }}"></script>
  
  <!-- Script JS -->
  <script src="{{ asset('script.js') }}"></script>
</body>
</html>
