function fn_ValForm() {
    var sMsg = "";
    var email = document.getElementById("email").value;
    var emailanda = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;
    var pilihan;
    var info;

        if (nama == "") {
            sMsg += "\n* Anda belum mengisikan Nama";
        }
        if (email == "") {
            sMsg += "\n* Anda belum mengisikan email";
        } else if (!emailanda.test(email)){
            sMsg += "\n* Email tidak valid";
        }
        if (umur == "") {
            sMsg += "\n* Anda belum mengisikan umur";
        } else {
            if (umur<=25) {
                info = " Paket Pelajar";
            } else {
                info = " Paket Umum"
            }
        }
        if (kategori == "") {
            sMsg += "\n* Anda belum mengisikan paket member";
        }
        if (sMsg != "") {
            alert("Peringatan:\n" + sMsg);
            return false;
        } 

        switch(kategori) {
            case "S":
                pilihan = "Silver";
                break;
            case "G":
                pilihan = "Gold";
                break;
            case "P":
                pilihan = "Platinum";
                break;
        }

        alert("Terima kasih " +nama+ "! Anda terdaftar di paket " +pilihan+ " " +info);
        return true;
}