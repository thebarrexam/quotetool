var q = ('<input type="number" class="quantity" oninput="calculate()"></input>')
var pn = ("AMDS-HEAS-SC")
var td = ("SKF @ptitude Connect Editor package; includes one (1) user license with full editor access level and OGC resources fee.   OGC connectivity via Microsoft Windows Remote DeskTop (RDP); Standard option.") 
var p = ("$3369.00")
var d = (" ")
var pn1 = ("AMDS-HEAS-AC (additional price per user)")
var pn2 = ("AMDS-HVAS-SC")
var pn3 = ("AMDS-HVAS-AC")
var pn4 = ("AMDS-RFDO-IMX")
var pn5 = ("AMDS-RFDO-WMX")
var pn6 = ("AMDS-RFDP-MA")
var pn7 = ("AMDS-RFDP-MI")
var pn8 = ("AMDS-GBUP")
var pn9 = ("AMDS-CFDO")
var pn10 = ("AMDS-CFDP")
var pn11 = ("AMDS-CFCA")
var pn12 = ("AMDS-CFSM")
var pn13 = ("ESS7801")
var pn14 = ("ADS7802")
var pn15 = (" ")
var td1 = ("Additional SKF @ptitude Connect Editor package; includes one (1) additional user license with full editor access and OGC resources fee.  OGC connectivity via Microsoft Windows Remote DeskTop (RDP); Standard option.  NOTE:  It requires AMDS-HEAS-SC of the same serial number and customer ID.")
var td2 = ("SKF @ptitude Connect Viewer package; includes one single user license with basic viewer access and OGC resources fee.  OGC connectivity via Microsoft Windows Remote DeskTop (RDP); Standard option.")
var td3 = ("Additional SKF @ptitude Connect Viewer package; includes one additional user license with basic viewer access and OGC resources fee. OGC connectivity via Microsoft Windows Remote DeskTop (RDP); Standard option. NOTE:  AMDS-HVAS-AC may be purchased as an additional user to AMDS-HVAS-SC and/or AMDS-HEAS-SC of the same serial number and customer ID.")
var td4 = ("Device connectivity service fee to support one SKF Multilog IMx on-line system device with corresponding device license key and one (1) GB data storage; one per device type.  Annual fee.")
var td5 = ("Device connectivity service fee to support one SKF Multilog WMx on-line system device with corresponding device license key and one (1) GB data storage; one per device type.  Annual fee.")
var td6 = ("Device connectivity service fee to support one SKF Microlog Analyzer portable device with corresponding device license and one Thin Client Transfer license and one (1) GB data storage; one per device type.  Annual fee.")
var td7 = ("Device connectivity service fee to support one SKF Microlog Inspector portable device with corresponding device license and one (1) GB data storage; one per device type.  Annual fee.")
var td8 = ("Additional one (1) GB storage capacity.  Annual fee.")
var td9 = ("OLS device configuration services fee; one per OLS device connected to the SKF OGC.")
var td10 = ("Portable device configuration services fee; one per portable device connected to the SKF OGC.")
var td11 = ("Customer account activation and system setup fee; one-time fee for a 4-hour block (creation of login credentials, host software database preparation and import of data).")
var td12 = ("System modification fee; includes one minor system configuration change with in SKF OGC.  These minor changes are system modification requests originated by the customer (e.g. new IP address update).")
var td13 = ("Miscellaneous system engineering services; sold in 4-hour blocks and scheduled ahead of time.  This may be broken down hourly with conjunction of AMDS-CFCA or ESS7801. Please refer to Sales Information Bulletin CM2009-46 for more details.")
var td14 = ("Asset diagnostic services; sold in 4-hour blocks and scheduled ahead of time with certified RDC analyst.  Assistance to diagnose assets within the OGC hosted database. ")
var p1 = ("$1,446.00 (2-5 users) $1,369.00 (6-10 users) $1,215.50 (11-15 users)")
var p2 = ("$1,377.00")
var p3 = ("$838.50 (2-10 users) $684.50 (11-14 users)")
var p4 = ("$151.00")
var p5 = ("$151.00")
var p6 = ("$151.00")
var p7 = ("$151.00")
var p8 = ("$60.00")
var p9 = ("$154.00")
var p10 = ("$77.00")
var p11 = ("$769.00")
var p12 = ("$231.00")
var p13 = ("$923.00")
var p14 = ("Email ADS Team for Quote")
var p15 = (" ")
var p16 = (" ")
var p17 = (" ")
var p18 = (" ")
var d1 = (" ")
var d2 = (" ")
var d3 = (" ")
var d4 = (" ")
var d5 = (" ")
var d6 = (" ")
var d7 = (" ")
var d8 = (" ")
var d9 = (" ")
var d10 = (" ")
var d11 = (" ")
var d12 = (" ")
var d13 = (" ")
var d14 = (" ")

document.getElementsByTagName('input')[0].onclick = function () {myRemove()};
function myRemove() {
    var list = document.getElementById('quoteList'), item = list.lastElementChild;
    list.removeChild(item);
    var unlist = document.getElementById('priceList'), item = unlist.lastElementChild;
    unlist.removeChild(item);
    var descunlist = document.getElementById('descList'), item = descunlist.lastElementChild;
    descunlist.removeChild(item);
}

function myRemoveRow() {
    document.getElementById("myTable").deleteRow(-1);
}

document.getElementById("add").onclick = function() {myFunction()};
function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box").value
    var outp = ('<td>$<input type="number" id="result"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn;
    cell3.innerHTML = td;
    cell4.innerHTML = p;
    cell5.innerHTML = outp;     
}


//AMDS-HEAS-AC 
document.getElementById("add1").onclick = function() {myAdd1()};
function myAdd1() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant1 = document.getElementById("box1").value
    var outp1 = ('<td>$<input type="number" id="result1"/></td>')
    cell1.innerHTML = quant1;
    cell2.innerHTML = pn1;
    cell3.innerHTML = td1;
    cell4.innerHTML = p1;
    cell5.innerHTML = outp1;
}

//AMDS-HVAS-SC
document.getElementById("add2").onclick = function() {myAdd2()};
function myAdd2() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box2").value
    var outp = ('<td>$<input type="number" id="result2"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn2;
    cell3.innerHTML = td2;
    cell4.innerHTML = p2;
    cell5.innerHTML = outp;
}

document.getElementById("add3").onclick = function() {myAdd3()};
function myAdd3() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box3").value
    var outp = ('<td>$<input type="number" id="result3"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn3;
    cell3.innerHTML = td3;
    cell4.innerHTML = p3;
    cell5.innerHTML = outp;
}

document.getElementById("add4").onclick = function() {myAdd4()};
function myAdd4() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box4").value
    var outp = ('<td>$<input type="number" id="result4"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn4;
    cell3.innerHTML = td4;
    cell4.innerHTML = p4;
    cell5.innerHTML = outp;
}

document.getElementById("add5").onclick = function() {myAdd5()};
function myAdd5() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box5").value
    var outp = ('<td>$<input type="number" id="result5"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn5;
    cell3.innerHTML = td5;
    cell4.innerHTML = p5;
    cell5.innerHTML = outp;
}

document.getElementById("add6").onclick = function() {myAdd6()};
function myAdd6() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box6").value
    var outp = ('<td>$<input type="number" id="result6"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn6;
    cell3.innerHTML = td6;
    cell4.innerHTML = p6;
    cell5.innerHTML = outp;
}

document.getElementById("add7").onclick = function() {myAdd7()};
function myAdd7() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box7").value
    var outp = ('<td>$<input type="number" id="result7"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn7;
    cell3.innerHTML = td7;
    cell4.innerHTML = p7;
    cell5.innerHTML = outp;
}

document.getElementById("add8").onclick = function() {myAdd8()};
function myAdd8() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box8").value
    var outp = ('<td>$<input type="number" id="result8"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn8;
    cell3.innerHTML = td8;
    cell4.innerHTML = p8;
    cell5.innerHTML = outp;
}

document.getElementById("add9").onclick = function() {myAdd9()};
function myAdd9() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box9").value
    var outp = ('<td>$<input type="number" id="result9"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn9;
    cell3.innerHTML = td9;
    cell4.innerHTML = p9;
    cell5.innerHTML = outp;
}

document.getElementById("add10").onclick = function() {myAdd10()};
function myAdd10() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box10").value
    var outp = ('<td>$<input type="number" id="result10"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn10;
    cell3.innerHTML = td10;
    cell4.innerHTML = p10;
    cell5.innerHTML = outp;
}

document.getElementById("add1").onclick = function() {myAdd1()};
function myAdd1() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box11").value
    var outp = ('<td>$<input type="number" id="result11"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn11;
    cell3.innerHTML = td11;
    cell4.innerHTML = p11;
    cell5.innerHTML = outp;
}

document.getElementById("add1").onclick = function() {myAdd1()};
function myAdd1() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box12").value
    var outp = ('<td>$<input type="number" id="result12"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn12;
    cell3.innerHTML = td12;
    cell4.innerHTML = p12;
    cell5.innerHTML = outp;
}

document.getElementById("add13").onclick = function() {myAdd13()};
function myAdd13() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box13").value
    var outp = ('<td>$<input type="number" id="result13"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn13;
    cell3.innerHTML = td13;
    cell4.innerHTML = p13;
    cell5.innerHTML = outp;
}

document.getElementById("add14").onclick = function() {myAdd14()};
function myAdd14() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var quant = document.getElementById("box14").value
    var outp = ('<td>$<input type="number" id="result14"/></td>')
    cell1.innerHTML = quant;
    cell2.innerHTML = pn14;
    cell3.innerHTML = td14;
    cell4.innerHTML = p14;
    cell5.innerHTML = outp;
}
//http://jsfiddle.net/cp81g4nf/1/

     $(document).on('blur','.quantity, .return', function()
     {
        var $row = $(this).closest(".row");
        var totalRcv = parseInt($row.find('.receive').val()) || 0;
        var totalRtn = parseInt($row.find('.return').val()) || 0;
        $row.find('.balance').val(totalRcv * totalRtn);
     });