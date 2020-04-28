$(document).ready(function() {
    //? Memanggil function
    all();
    pasien();
    provinsi();
    negara();
    indoProv();
    indonesia();
    positif();
    sembuh();
    meninggal();
    time();

    //? Memubuat function agar berjalan setiap detik
    setInterval(function() {
        all();
        provinsi();
        indonesia();
        positif();
        sembuh();
        meninggal();
        time();
    }, 1000);

    //? Membuat function

    //? function all untuk memanggil semua data global corona dan memunculkan data table
    function all() {
        $.ajax({
            url: "https://api.kawalcorona.com/",
            type: "GET",
            success: function(data) {
                var nomor = 1;
                var html = "";
                $.each(data, function(index, val) {
                    html += "<tr>";
                    html += "<td>" + nomor++;
                    +"</td>";
                    html += "<td>" + val["attributes"]["Country_Region"];
                    +"</td>";
                    html +=
                        "<td>" +
                        rubah(val["attributes"]["Confirmed"]) +
                        "</td>";
                    html +=
                        "<td>" +
                        rubah(val["attributes"]["Recovered"]) +
                        "</td>";
                    html +=
                        "<td>" + rubah(val["attributes"]["Deaths"]) + "</td>";
                    html += "</tr>";
                });
                $("#all-data").html(html);
            },
            error: function() {}
        });
    }

    //? function pasien untuk menampilkan semua data pasien di indonesia
    function pasien() {
        $.ajax({
            url: "https://indonesia-covid-19.mathdro.id/api/kasus",
            type: "GET",
            success: function(data) {
                var nomor = 1;
                var data = data["data"];
                var html = "";
                $.each(data, function(index, val) {
                    html += "<tr>";
                    html += "<td>" + nomor++;
                    +"</td>";
                    if (val["umur"] == null) {
                        html += "<td> - </td>";
                    } else {
                        html += "<td>" + val["umur"];
                        +"</td>";
                    }
                    if (val["jenis_kelamin"] == "1") {
                        html +=
                            "<td><img src='img/man.png' alt='Laki-laki' class='rounded-circle img-thumbnail' style='height: 40px;'></td>";
                    } else {
                        html +=
                            "<td><img src='img/woman.png' alt='Perempuan' class='rounded-circle img-thumbnail' style='height: 40px;'></td>";
                    }
                    if (val["id_status"] == "1") {
                        html +=
                            "<td><span class='badge badge-success'>Sembuh</span></td>";
                    } else if (val["id_status"] == "2") {
                        html +=
                            "<td><span class='badge badge-warning'>Positif</span></td>";
                    } else {
                        html +=
                            "<td><span class='badge badge-danger'>Meninggal</span></td>";
                    }
                    if (val["wn"] == "1") {
                        html += "<td> WNI </td>";
                    } else {
                        html += "<td>" + val["detail_wn"];
                        +"</td>";
                    }
                    html += "</tr>";
                });
                $("#all-pasien-data").html(html);
            },
            error: function() {}
        });
    }

    //? function provinsi untuk memanggil semua data di indonesia berdasarkan provinsi corona dan memunculkan data table
    function provinsi() {
        $.ajax({
            url: "https://api.kawalcorona.com/indonesia/provinsi/",
            type: "GET",
            success: function(data) {
                var nomor = 1;
                var html = "";
                $.each(data, function(index, val) {
                    html += "<tr>";
                    html += "<td>" + nomor++;
                    +"</td>";
                    html += "<td>" + val["attributes"]["Provinsi"];
                    +"</td>";
                    html +=
                        "<td>" +
                        rubah(val["attributes"]["Kasus_Posi"]) +
                        "</td>";
                    html +=
                        "<td>" +
                        rubah(val["attributes"]["Kasus_Semb"]) +
                        "</td>";
                    html +=
                        "<td>" +
                        rubah(val["attributes"]["Kasus_Meni"]) +
                        "</td>";
                    html += "</tr>";
                });
                $("#provinsi-data").html(html);
            },
            error: function() {}
        });
    }

    //? function indonesia untuk mengetahui jumlah data di indonesia
    function indonesia() {
        $.ajax({
            url: "https://api.kawalcorona.com/indonesia/",
            type: "GET",
            success: function(data) {
                var html = "";
                html +=
                    data[0]["positif"] +
                    " POSITIF, " +
                    data[0]["sembuh"] +
                    " SEMBUH,<BR>" +
                    data[0]["meninggal"] +
                    " MENINGGAL";
                $("#name-indonesia").html(data[0]["name"]);
                $("#jum-positif").html(data[0]["positif"]);
                $("#jum-sembuh").html(data[0]["sembuh"]);
                $("#jum-meninggal").html(data[0]["meninggal"]);
                $("#val-indonesia").html(html);
            },
            error: function() {}
        });
    }

    //? function positif untuk mengetahui jumlah data positif di dunia
    function positif() {
        $.ajax({
            url: "https://api.kawalcorona.com/positif/",
            type: "GET",
            success: function(data) {
                $("#name-positif").html(data["name"]);
                $("#val-positif").html(data["value"]);
            },
            error: function() {}
        });
    }

    //? function sembuh untuk mengetahui jumlah data sembuh di dunia
    function sembuh() {
        $.ajax({
            url: "https://api.kawalcorona.com/sembuh/",
            type: "GET",
            success: function(data) {
                $("#name-sembuh").html(data["name"]);
                $("#val-sembuh").html(data["value"]);
            },
            error: function() {}
        });
    }

    //? function meninggal untuk mengetahui jumlah data meninggal di dunia
    function meninggal() {
        $.ajax({
            url: "https://api.kawalcorona.com/meninggal/",
            type: "GET",
            success: function(data) {
                $("#name-meninggal").html(data["name"]);
                $("#val-meninggal").html(data["value"]);
            },
            error: function() {}
        });
    }

    //? function negara untuk menampilkan negara-negara yang terkena virus corona
    function negara() {
        $.ajax({
            url: "https://api.kawalcorona.com/",
            type: "GET",
            success: function(data) {
                var html = "";
                html += "<option value=''>-- Pilih Negara --</option>";
                $.each(data, function(index, val) {
                    html +=
                        "<option value='" +
                        index +
                        "'>" +
                        val["attributes"]["Country_Region"];
                    +"</option>";
                });
                $("#select-all-negara").html(html);
            },
            error: function() {}
        });
    }

    //? function indoProv untuk menampilkan provinsi-provinsi yang terkena virus corona
    function indoProv() {
        $.ajax({
            url: "https://api.kawalcorona.com/indonesia/provinsi/",
            type: "GET",
            success: function(data) {
                var html = "";
                html += "<option value=''>-- Pilih Provinsi --</option>";
                $.each(data, function(index, val) {
                    html +=
                        "<option value='" +
                        index +
                        "'>" +
                        val["attributes"]["Provinsi"];
                    +"</option>";
                });
                $("#select-all-provinsi").html(html);
            },
            error: function() {}
        });
    }

    //? Membuat struktur diagram lingkaran
    //? menampilkan digram sesuai negara yang di pilih
    $("#select-all-negara").change(function() {
        var val = $("#select-all-negara option:selected").val();
        if (val != "") {
            $.ajax({
                url: "https://api.kawalcorona.com/",
                type: "GET",
                success: function(data) {
                    if (
                        data[val]["attributes"]["Country_Region"] == "Indonesia"
                    ) {
                        $("#prov-indo").addClass("tampil");
                        drawChart(
                            data[val]["attributes"]["Confirmed"],
                            data[val]["attributes"]["Recovered"],
                            data[val]["attributes"]["Deaths"],
                            data[val]["attributes"]["Country_Region"]
                        );
                    } else {
                        $("#prov-indo").removeClass("tampil");
                        drawChart(
                            data[val]["attributes"]["Confirmed"],
                            data[val]["attributes"]["Recovered"],
                            data[val]["attributes"]["Deaths"],
                            data[val]["attributes"]["Country_Region"]
                        );
                    }
                },
                error: function() {}
            });
        } else {
            $("#prov-indo").removeClass("tampil");
            $("#piechart").html("");
        }
    });

    //? menampilkan digram sesuai provinsi yang di pilih
    $("#select-all-provinsi").change(function() {
        var val = $("#select-all-provinsi option:selected").val();
        if (val != "") {
            $.ajax({
                url: "https://api.kawalcorona.com/indonesia/provinsi/",
                type: "GET",
                success: function(data) {
                    drawChart(
                        data[val]["attributes"]["Kasus_Posi"],
                        data[val]["attributes"]["Kasus_Semb"],
                        data[val]["attributes"]["Kasus_Meni"],
                        data[val]["attributes"]["Provinsi"]
                    );
                },
                error: function() {}
            });
        } else {
            $.ajax({
                url: "https://api.kawalcorona.com/indonesia/",
                type: "GET",
                success: function(data) {
                    drawChart(
                        data[0]["positif"],
                        data[0]["sembuh"],
                        data[0]["meninggal"],
                        data[0]["name"]
                    );
                },
                error: function() {}
            });
        }
    });

    //? function drawCharts untuk membuat diagram sesuai data yang di kirim
    function drawChart(positif, sembuh, meninggal, wilayah) {
        var ctx = document.getElementById("piechart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "pie",
            data: {
                datasets: [
                    {
                        data: [positif, sembuh, meninggal],
                        backgroundColor: ["#ffa426", "#63ed7a", "#fc544b"],
                        label: "Dataset 1"
                    }
                ],
                labels: [
                    rubah(positif) + " Orang Positif",
                    rubah(sembuh) + " Orang Sembuh",
                    rubah(meninggal) + " Orang Meninggal"
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: "Data Kasus Coronavirus " + wilayah
                },
                legend: {
                    position: "bottom"
                }
            }
        });
        //! myChart.reset();
        //! myChart.destroy();
        myChart.update({
            duration: 1000,
            easing: "easeOutBounce"
        });
        myChart.render({
            duration: 1000,
            lazy: true,
            easing: "easeOutBounce"
        });
    }

    //? function time untuk menampilkan waktu saat ini
    function time() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        var day = days[date.getDay()];
        var d = date.getDate();
        var bulan = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var b = bulan[date.getMonth()];
        var y = date.getFullYear();

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        d = d < 10 ? "0" + d : d;

        var time =
            "Sumber data : Kawal Corona. Update Saat Ini : " +
            day +
            ", " +
            d +
            " " +
            b +
            " " +
            y +
            " " +
            h +
            ":" +
            m +
            ":" +
            s +
            " WIB";
        document.getElementById("Date").innerText = time;
        document.getElementById("Date").textContent = time;
    }

    //? function rubah untuk membuat angka satuan ribuan
    function rubah(angka) {
        var reverse = angka
                .toString()
                .split("")
                .reverse()
                .join(""),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan
            .join(",")
            .split("")
            .reverse()
            .join("");
        return ribuan;
    }
});
