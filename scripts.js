$(".tabs").tabs();
$("select").formSelect();
function code_check() {
  document.getElementById("tarea");
}
function code_clear() {
  document.getElementById("tarea").value = "";
}
function code_convert(c) {
  var b = 1, d = 0, f = "";
  c = document.getElementById("tarea");
  var a = c.value;
  1 == document.getElementById("toc_check").checked && (a = a.replace(/(<h[1-6].*?>)\n/gi, "$1"), a = a.replace(/\n(<\/h[1-6].*?>)/gi, "$1"), a = a.replace(/<h([\d]).*?>(\n.*?\n|.*?\n|.*?|\n.*?)<\/h([\d]).*?>/gi, function (k, e, g, h) {
    return e != h ? k : (e > b ? f += Array(e - b + 1).join("<ol>") : e < b && (f += Array(b - e + 1).join("</ol>")), xy = g.replace(/\s+/g, "_").toLowerCase(), d += 1, f += '<li><a href="#' + xy + '" title="' + g + '">' + g + "</a></li>", b = parseInt(e), "<h" + e + " id='" + xy + "'>" + g + "</h" + h + ">");
  }), b && (f += Array(b - 1).join("</ol>")), a = a.replace("<b>[TOC DISINI]</b>", '<div class="elcTOC"><h2>Daftar Isi</h2><div id="elcTOC">' + f + "</ol></div></div>"), a = a.replace("<script>elcTOC();\x3c/script>", ""));
  1 == document.getElementById("bq_check").checked && (a = a.replace(RegExp('<blockquote class="tr_bq( [^"]*?)?"(>|\\s[^<>]*?>)([\\s\\S]*?)<\\/blockquote>', "g"), '<blockquote class="tr_bq$1"$2$3\n</blockquote>'));
  1 == document.getElementById("str_em_check").checked && (a = a.replace(/<b>(.*?)<\/b>/gi, "<strong>$1</strong>"), a = a.replace(/<i>(.*?)<\/i>/gi, "<em>$1</em>"), a = a.replace(/style="text-align: left;"/gi, ""), a = a.replace(/style="clear: both; text-align: center;"/gi, ""), a = a.replace(/border="0" data-original-height=".*?" data-original-width=".*?"/gi, ""));
  1 == document.getElementById("img_check").checked && (a = a.replace(RegExp('<div class="separator( [^"]*?)?"(>|\\s[^<>]*?>)([\\s\\S]*?)<\\/div>', "g"), '<figure class="separator$1"$2$3\n</figure>'), a = a.replace(RegExp('<img(.*?)src="(.*?)/s(.*?)/(.*?)"(.*?)/>', "g"), '<img$1src="$2/s900/$4"$5 loading="lazy"/>'));
  1 == document.getElementById("lnk_check").checked && (a = a.replace(/https:\/\/draft.blogger.com\/blogger.g\?blogID=4156644495655521536/gi, ""), a = a.replace(/rel='nofollow'/gi, "rel='nofollow noopener'"), a = a.replace(/rel="nofollow"/gi, "rel='nofollow noopener noreferer'"), a = a.replace(/<a href=".*?" imageanchor.*?>(.*?)<\/a>/gi, "$1"), a = a.replace(/<p><\/p>/gi, ""), a = a.replace(/<span style="font-family:.*?>(.*?)<\/span>/gi, "<code>$1</code>"));
  

  
  1 == $("#readso_check").checked && $(".input-field.readalso_url").toggleClass("asu");
  c.value = a;
  c.focus();
  c.select();
}
function code_check1() {
  var c = document.getElementById("tareas");
  0 < c.value.indexOf("Pastekan Disini Kode yang Akan Anda Pasang pada Postingan Blog") && (c.value = "");
}
function code_clear1() {
  document.getElementById("tareas").value = "";
}
function code_convert1() {
  var c = document.getElementById("tareas"), b = c.value, d = document.getElementById("lang");
  d = d.options[d.selectedIndex].value;
  b = b.replace(/&/g, "&amp;");
  b = b.replace(/'/g, "&#039;");
  b = b.replace(/"/g, "&quot;");
  b = b.replace(/</g, "&lt;");
  b = b.replace(/>/g, "&gt;");
  c.value = '<pre class="hl ' + d + '"><code>\n' + b + "\n\n</code></pre>";
  c.focus();
  c.select();
}
var input = document.getElementById("inputInput"), judul1 = document.getElementById("title1Input"), author = document.getElementById("authorInput"), category = document.getElementById("category"), bgcl = document.getElementById("bg-color");
input.onkeyup = function () {
  document.getElementById("categories").innerHTML = label1.value;
  document.getElementById("content-title1").innerHTML = judul1.value;
  document.getElementById("elc").innerHTML = btitle1.value;
  document.getElementById("author-name").innerHTML = "@" + author.value;
};
document.getElementById("bg-color").addEventListener("change", function () {
  var c = "#fff #d32f2f #c2185b #7b1fa2 #512da8 #303f9f #1976d2 #0288d1 #0097a7 #00796b #388e3c #689f38 #afb42b #fbc02d #ffa000 #f57c00 #e64a19 #5d4037 #616161 #455a64".split(" ")[bgcl.selectedIndex];
  document.getElementById("content-container").style.backgroundColor = c;
});
$("#bg-styles").data("oldVal", $("#bg-styles").val());
$("#bg-styles").change(function () {
  var c = $(this), b = c.val(), d = c.data("oldVal");
  c.data("oldVal", b);
  $("#content-container").removeClass(d).addClass(b);
});
function check(c) {
  document.getElementById("categories").innerHTML = category.options[category.selectedIndex].value;
}
;
