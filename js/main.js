


function tongTien(){
    //// input:
    var tienLuong = document.getElementById('tienLuong1h').value;
    
    var soGio = document.getElementById('SoGioLam').value;
    // console.log(tienLuong);
    // console.log(soGio);
    // output:
    var traOutPut = 0;

    ////progress:
    traOutPut = tienLuong * soGio;
    var tagSpan = document.getElementById('traKetQua').innerHTML = traOutPut.toLocaleString();
}


/** xử lý đăng nhập */

// cách phổ thông nhất 

var loging = document.getElementById('btnLoging');
loging.onclick = function () {
    //input:
    var taiKhoan = document.getElementById('taiKhoan').value;
    var matKhau =document.getElementById('matKhau').value;
    // console.log(taiKhoan);
    // console.log(matKhau);
    /// output:
    var traketqua = '';
    ///progress:
    traketqua = 'Tài Khoản : ' + taiKhoan + ' - Mật Khẩu : ' + matKhau;
    var tagKetQua = document.getElementById('KetQuaDangNhap');
    tagKetQua.innerHTML = traketqua;
    tagKetQua.className = 'bg-primary text-white p-2 display-inline-block m-2'
};

/////cách 1 


function longing () {
    ///input:
    var taiKhoan = document.getElementById('taiKhoan').value;
    var matKhau = document.getElementById('matKhau').value;
    /// output:
    var thongtin = '';

    /// progress:
    thongtin = ' tai khoan : ' + taiKhoan + '- Mật Khẩu : ' + matKhau;
    var tagspan = document.getElementById('KetQuaDangNhap');
    tagspan.innerHTML = thongtin;

    tagspan.className = "bg-primary p-2 display-inline-block m2 text-white"
}


/// cách 2 
function inThongTin () {
    var taiKhoan = document.getElementById('taikhoan').value;
    var matKhau = document.getElementById('matkhau').value;
    //output: string
    var outPut = '';

    /// progress:
    outPut = 'Tài Khoản : ' + taiKhoan + ' - Mật Khẩu : ' + matKhau;
    var tagspan = document.getElementById('KetQuaDangNhap');
    tagspan.innerHTML = outPut;
    
    tagspan.className = 'p-2 bg-primary text-white display-inline-block m-2'
}

var hienthongtin = document.getElementById('btnLoging');
hienthongtin.onclick = inThongTin;


/**
 đổi Tiền 
 */

 var btnDoiTien = document.getElementById('btnDoiTien');
 btnDoiTien.onclick = function() {

    /// input:
    var Usd = 3140;
    var Vnd = 23000;
    var piCoin = document.getElementById('Picoin').value;
    console.log(Vnd);
    
    // output:
    var tongTien = 0;
    tongTien = piCoin * Usd * Vnd;
    console.log(tongTien);

    // progress:
    var tagname = document.getElementById('thanhTien');
    tagname.innerHTML = tongTien.toLocaleString() + ' VND';
    tagname.className = ' text-dark font-weight-bold'
 };


























