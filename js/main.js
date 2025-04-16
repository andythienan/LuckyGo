let orders = [];

fetch("data/dummy-orders.json")
  .then(res => res.json())
  .then(data => orders = data);

function lookupOrder() {
  const code = document.getElementById("orderCode").value.trim().toUpperCase();
  const output = document.getElementById("orderResult");
  const order = orders.find(o => o.code === code);

  if (!code) {
    output.innerHTML = `<div class="alert alert-warning">Vui lòng nhập mã đơn hàng.</div>`;
    return;
  }

  if (order) {
    output.innerHTML = `
      <div class="alert alert-success">
        <strong>Mã đơn:</strong> ${order.code}<br>
        <strong>Trạng thái:</strong> ${order.status}<br>
        <strong>Ngày tạo:</strong> ${order.date}
      </div>`;
  } else {
    output.innerHTML = `<div class="alert alert-danger">Không tìm thấy đơn hàng.</div>`;
  }
}

function generateQR(link) {
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), link);
}

function withdrawCOD() {
  alert("Yêu cầu rút tiền đã được gửi thành công!");
}
