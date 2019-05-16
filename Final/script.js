$(document).ready(function() {

    var latitude = null;
    var longitude = null;
  $.getJSON("https://extreme-ip-lookup.com/json/", function(data){
        var country = data.country +" || ";
        var city = "Your City is " +data.city + " || ";
        var ip = "Your IP Adress is " +data.query;
        var contCode = "flag-icon flag-icon-"+data.countryCode.toLowerCase();
        var latitude = data.lat;
        var longitude = data.lon;

        $("#country").text(country);
        $("#city").text(city);
        $("#IP").text(ip);
        $("#flag").addClass(contCode);

        var data = [{
      		"latitude": "40.714137306",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "OPPOSITE OF",
      		"longitude": "-73.996141723",
      		"weight": 3
      	},
      	{
      		"latitude": "40.813318753",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.909437335",
      		"weight": 2
      	},
      	{
      		"latitude": "40.672138341",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.911218815",
      		"weight": 1
      	},
      	{
      		"latitude": "40.749077943",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.993880399",
      		"weight": 2
      	},
      	{
      		"latitude": "40.608265735",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.999662899",
      		"weight": 3
      	},
      	{
      		"latitude": "40.819366438",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.88870176",
      		"weight": 2
      	},
      	{
      		"latitude": "40.625359062",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.030290585",
      		"weight": 2
      	},
      	{
      		"latitude": "40.596753112",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.985266654",
      		"weight": 2
      	},
      	{
      		"latitude": "40.740467769",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.996439717",
      		"weight": 1
      	},
      	{
      		"latitude": "40.643154105",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.012357433",
      		"weight": 2
      	},
      	{
      		"latitude": "40.798963998",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.95031372",
      		"weight": 2
      	},
      	{
      		"latitude": "40.888513527",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.841507621",
      		"weight": 2
      	},
      	{
      		"latitude": "40.835786831",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.916468147",
      		"weight": 2
      	},
      	{
      		"latitude": "40.831129157",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.890373232",
      		"weight": 2
      	},
      	{
      		"latitude": "40.67599797",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.919314464",
      		"weight": 2
      	},
      	{
      		"latitude": "40.585002905",
      		"longitude": "-73.927902973",
      		"weight": 2
      	},
      	{
      		"latitude": "40.778219811",
      		"longitude": "-73.951495451",
      		"weight": 2
      	},
      	{
      		"latitude": "40.83696823",
      		"longitude": "-73.860823746",
      		"weight": 2
      	},
      	{
      		"latitude": "40.690248988",
      		"longitude": "-73.948187901",
      		"weight": 2
      	},
      	{
      		"latitude": "40.66078355",
      		"longitude": "-73.961478336",
      		"weight": 2
      	},
      	{
      		"latitude": "40.65388611",
      		"longitude": "-73.954497844",
      		"weight": 3
      	},
      	{
      		"latitude": "40.671761602",
      		"longitude": "-73.791643747",
      		"weight": 2
      	},
      	{
      		"latitude": "40.701203336",
      		"longitude": "-73.987245192",
      		"weight": 2
      	},
      	{
      		"latitude": "40.787874599",
      		"longitude": "-73.928181646",
      		"weight": 2
      	},
      	{
      		"latitude": "40.73448548",
      		"longitude": "-73.868012689",
      		"weight": 2
      	},
      	{
      		"latitude": "40.663321591",
      		"longitude": "-73.903747666",
      		"weight": 3
      	},
      	{
      		"latitude": "40.709438277",
      		"longitude": "-73.996304309",
      		"weight": 2
      	},
      	{
      		"latitude": "40.727138212",
      		"longitude": "-73.984195143",
      		"weight": 2
      	},
      	{
      		"latitude": "40.613074818",
      		"longitude": "-73.944242644",
      		"weight": 2
      	},
      	{
      		"latitude": "40.836819196",
      		"longitude": "-73.916958337",
      		"weight": 2
      	},
      	{
      		"latitude": "40.715509595",
      		"longitude": "-74.00600398",
      		"weight": 1
      	},
      	{
      		"latitude": "40.647330127",
      		"longitude": "-73.896999556",
      		"weight": 3
      	},
      	{
      		"latitude": "40.679117646",
      		"longitude": "-73.939893487",
      		"weight": 3
      	},
      	{
      		"latitude": "40.673258451",
      		"longitude": "-73.730036485",
      		"weight": 3
      	},
        {
      		"latitude": "40.836819196",
      		"longitude": "-73.916958337",
      		"weight": 2
      	},
      	{
      		"latitude": "40.715509595",
      		"longitude": "-74.00600398",
      		"weight": 1
      	},
      	{
      		"latitude": "40.647330127",
      		"longitude": "-73.8969086556",
      		"weight": 3
      	},
      	{
      		"latitude": "40.679117646",
      		"longitude": "-73.93564487",
      		"weight": 3
      	},
      	{
      		"latitude": "40.673258451",
      		"longitude": "-73.7304566485",
      		"weight": 3
      	},
      	{
      		"latitude": "40.866669697",
      		"longitude": "-73.866304141",
      		"weight": 2
      	},
      	{
      		"latitude": "40.64257326",
      		"longitude": "-74.086525069",
      		"weight": 3
      	},
      	{
      		"latitude": "40.873153628",
      		"longitude": "-73.899737692",
      		"weight": 2
      	},
      	{
      		"latitude": "40.61143828",
      		"longitude": "-73.972942106",
      		"weight": 1
      	},
      	{
      		"latitude": "40.837252351",
      		"longitude": "-73.871505832",
      		"weight": 2
      	},
      	{
      		"latitude": "40.802765805",
      		"longitude": "-73.939572343",
      		"weight": 2
      	},
      	{
      		"latitude": "40.64481289",
      		"longitude": "-73.896700749",
      		"weight": 2
      	},
      	{
      		"latitude": "40.840687997",
      		"longitude": "-73.89827232",
      		"weight": 3
      	},
      	{
      		"latitude": "40.754972311",
      		"longitude": "-73.946354503",
      		"weight": 2
      	},
      	{
      		"latitude": "40.746820464",
      		"longitude": "-73.891753456",
      		"weight": 1
      	},
      	{
      		"latitude": "40.830073328",
      		"longitude": "-73.877612067",
      		"weight": 1
      	},
        {
      		"latitude": "40.83609649",
      		"longitude": "-73.889743468",
      		"weight": 3
      	},
      	{
      		"latitude": "40.752823181",
      		"longitude": "-73.981373788",
      		"weight": 3
      	},
      	{
      		"latitude": "40.775772829",
      		"longitude": "-73.954750345",
      		"weight": 3
      	},
      	{
      		"latitude": "40.660202207",
      		"longitude": "-73.758776078",
      		"weight": 1
      	},
      	{
      		"latitude": "40.872596004",
      		"longitude": "-73.825563635",
      		"weight": 1
      	},
      	{
      		"latitude": "40.707477574",
      		"longitude": "-73.931777734",
      		"weight": 2
      	},
      	{
      		"latitude": "40.85564181",
      		"longitude": "-73.912445139",
      		"weight": 2
      	},
      	{
      		"latitude": "40.631916443",
      		"longitude": "-73.907943357",
      		"weight": 3
      	},
      	{
      		"latitude": "40.752809101",
      		"longitude": "-73.979287609",
      		"weight": 1
      	},
      	{
      		"latitude": "40.886651136",
      		"longitude": "-73.859424999",
      		"weight": 2
      	},
      	{
      		"latitude": "40.732621998",
      		"longitude": "-73.848138679",
      		"weight": 2
      	},
      	{
      		"latitude": "40.642266777",
      		"longitude": "-74.108123059",
      		"weight": 3
      	},
      	{
      		"latitude": "40.716963396",
      		"longitude": "-73.984233629",
      		"weight": 2
      	},
      	{
      		"latitude": "40.78307848",
      		"longitude": "-73.946396856",
      		"weight": 3
      	},
      	{
      		"latitude": "40.75971947",
      		"longitude": "-73.905882473",
      		"weight": 1
      	},
      	{
      		"latitude": "40.710783222",
      		"longitude": "-73.996632474",
      		"weight": 2
      	},
      	{
      		"latitude": "40.772656213",
      		"longitude": "-73.958489214",
      		"weight": 2
      	},
      	{
      		"latitude": "40.632359823",
      		"longitude": "-73.887950809",
      		"weight": 2
      	},
      	{
      		"latitude": "40.814678852",
      		"longitude": "-73.936227034",
      		"weight": 1
      	},
      	{
      		"latitude": "40.688040723",
      		"longitude": "-73.951103109",
      		"weight": 3
      	},
      	{
      		"latitude": "40.693777815",
      		"longitude": "-73.907324243",
      		"weight": 2
      	},
      	{
      		"latitude": "40.779168082",
      		"longitude": "-73.954784146",
      		"weight": 2
      	},
      	{
      		"latitude": "40.893901834",
      		"longitude": "-73.85879478",
      		"weight": 2
      	},
      	{
      		"latitude": "40.827990582",
      		"longitude": "-73.8889475",
      		"weight": 2
      	},
      	{
      		"latitude": "40.732293315",
      		"longitude": "-73.987921193",
      		"weight": 2
      	},
      	{
      		"latitude": "40.812378735",
      		"longitude": "-73.953338242",
      		"weight": 1
      	},
      	{
      		"latitude": "40.662147595",
      		"longitude": "-73.927210452",
      		"weight": 3
      	},
      	{
      		"latitude": "40.763847969",
      		"longitude": "-73.869665603",
      		"weight": 2
      	},
      	{
      		"latitude": "40.638076735",
      		"longitude": "-74.036108169",
      		"weight": 3
      	},
      	{
      		"latitude": "40.770600416",
      		"longitude": "-73.958526598",
      		"weight": 3
      	},
      	{
      		"latitude": "40.765122262",
      		"longitude": "-73.959508314",
      		"weight": 3
      	},
      	{
      		"latitude": "40.754877681",
      		"longitude": "-73.995814518",
      		"weight": 3
      	},
      	{
      		"latitude": "40.806772635",
      		"longitude": "-73.950058647",
      		"weight": 2
      	},
      	{
      		"latitude": "40.731667658",
      		"longitude": "-73.989415087",
      		"weight": 2
      	},
      	{
      		"latitude": "40.769342949",
      		"longitude": "-73.773854171",
      		"weight": 2
      	},
      	{
      		"latitude": "40.821025398",
      		"longitude": "-73.937604737",
      		"weight": 2
      	},
      	{
      		"latitude": "40.886496661",
      		"longitude": "-73.845917418",
      		"weight": 2
      	},
      	{
      		"latitude": "40.795598264",
      		"longitude": "-73.972964776",
      		"weight": 2
      	},
      	{
      		"latitude": "40.811446464",
      		"longitude": "-73.916184409",
      		"weight": 2
      	},
      	{
      		"latitude": "40.81937741",
      		"longitude": "-73.940612234",
      		"weight": 2
      	},
      	{
      		"latitude": "40.590214178",
      		"longitude": "-74.099332704",
      		"weight": 1
      	},
      	{
      		"latitude": "40.703684905",
      		"longitude": "-74.009667273",
      		"weight": 3
      	},
      	{
      		"latitude": "40.695151143",
      		"longitude": "-73.755977435",
      		"weight": 1
      	},
      	{
      		"latitude": "40.757624357",
      		"longitude": "-73.985678665",
      		"weight": 2
      	},
      	{
      		"latitude": "40.573022333",
      		"longitude": "-73.99382813",
      		"weight": 3
      	},
      	{
      		"latitude": "40.605825789",
      		"longitude": "-74.066147727",
      		"weight": 2
      	},
      	{
      		"latitude": "40.800271403",
      		"longitude": "-73.952483488",
      		"weight": 3
      	},
      	{
      		"latitude": "40.636818967",
      		"longitude": "-74.118653127",
      		"weight": 1
      	},
      	{
      		"latitude": "40.759577798",
      		"longitude": "-73.8301407",
      		"weight": 2
      	},
      	{
      		"latitude": "40.688702979",
      		"longitude": "-73.922508291",
      		"weight": 2
      	},
      	{
      		"latitude": "40.688347774",
      		"longitude": "-73.799055993",
      		"weight": 2
      	},
      	{
      		"latitude": "40.804428073",
      		"longitude": "-73.95537021",
      		"weight": 2
      	},
      	{
      		"latitude": "40.750021973",
      		"longitude": "-73.991339463",
      		"weight": 2
      	},
      	{
      		"latitude": "40.640423121",
      		"longitude": "-74.011611059",
      		"weight": 1
      	},
      	{
      		"latitude": "40.834669102",
      		"longitude": "-73.905013949",
      		"weight": 2
      	},
      	{
      		"latitude": "40.64382175",
      		"longitude": "-73.999115001",
      		"weight": 2
      	},
      	{
      		"latitude": "40.801012471",
      		"longitude": "-73.946216267",
      		"weight": 3
      	},
      	{
      		"latitude": "40.767569331",
      		"longitude": "-73.994734297",
      		"weight": 2
      	},
      	{
      		"latitude": "40.821889599",
      		"longitude": "-73.859261922",
      		"weight": 3
      	},
      	{
      		"latitude": "40.843185413",
      		"longitude": "-73.84398293",
      		"weight": 2
      	},
      	{
      		"latitude": "40.782465756",
      		"longitude": "-73.841366456",
      		"weight": 2
      	},
      	{
      		"latitude": "40.836159512",
      		"longitude": "-73.8506308",
      		"weight": 3
      	},
      	{
      		"latitude": "40.730372616",
      		"longitude": "-73.999110247",
      		"weight": 2
      	},
      	{
      		"latitude": "40.651372334",
      		"longitude": "-73.96344425",
      		"weight": 1
      	},
      	{
      		"latitude": "40.566393341",
      		"longitude": "-74.137913561",
      		"weight": 3
      	},
      	{
      		"latitude": "40.558581581",
      		"longitude": "-74.107055527",
      		"weight": 2
      	},
      	{
      		"latitude": "40.84589001",
      		"longitude": "-73.905659355",
      		"weight": 2
      	},
      	{
      		"latitude": "40.757467209",
      		"longitude": "-73.946190063",
      		"weight": 2
      	},
      	{
      		"latitude": "40.839303326",
      		"longitude": "-73.939239194",
      		"weight": 3
      	},
      	{
      		"latitude": "40.757865035",
      		"longitude": "-73.967818383",
      		"weight": 2

      	},
      	{

      		"latitude": "40.618440157",
      		"longitude": "-74.155246106",
      		"weight": 3

      	},
      	{
      		"latitude": "40.789371383",
      		"longitude": "-73.843274825",
      		"weight": 3
      	},
      	{
      		"latitude": "40.599050497",
      		"longitude": "-74.068081953",
      		"weight": 2
      	},
      	{
      		"latitude": "40.74622038",
      		"longitude": "-73.873868435",
      		"weight": 3
      	},
      	{
      		"latitude": "40.842202237",
      		"longitude": "-73.849757061",
      		"weight": 3
      	},
      	{
      		"latitude": "40.829314525",
      		"longitude": "-73.892894806",
      		"weight": 1
      	},
      	{
      		"latitude": "40.895448125",
      		"longitude": "-73.859641504",
      		"weight": 3
      	},
      	{
      		"latitude": "40.727339335",
      		"longitude": "-73.727912405",
      		"weight": 2
      	},
      	{
      		"latitude": "40.655227479",
      		"longitude": "-73.904047667",
      		"weight": 2
      	},
      	{
      		"latitude": "40.650612315",
      		"longitude": "-74.002812394",
      		"weight": 2
      	},
      	{
      		"latitude": "40.853587401",
      		"longitude": "-73.900591356",
      		"weight": 2
      	},
      	{
      		"latitude": "40.747724526",
      		"longitude": "-73.702313127",
      		"weight": 3
      	},
      	{
      		"latitude": "40.683014038",
      		"longitude": "-73.990208814",
      		"weight": 2
      	},
      	{
      		"latitude": "40.669413836",
      		"longitude": "-73.91260308",
      		"weight": 2
      	},
      	{
      		"latitude": "40.663322162",
      		"longitude": "-73.982909048",
      		"weight": 2
      	},
      	{
      		"latitude": "40.537618576",
      		"longitude": "-74.180166681",
      		"weight": 2
      	},
      	{
      		"latitude": "40.845849038",
      		"longitude": "-73.933504454",
      		"weight": 2
      	},
      	{
      		"latitude": "40.817928739",
      		"longitude": "-73.915146584",
      		"weight": 2
      	},
      	{
      		"latitude": "40.692860741",
      		"longitude": "-73.815789006",
      		"weight": 2
      	},
      	{
      		"latitude": "40.752198698",
      		"longitude": "-73.993465045",
      		"weight": 3
      	},
      	{
      		"latitude": "40.84944555",
      		"longitude": "-73.856236066",
      		"weight": 2
      	},
      	{
      		"latitude": "40.703415714",
      		"longitude": "-73.94255492",
      		"weight": 2
      	},
      	{
      		"latitude": "40.752797126",
      		"longitude": "-73.994883445",
      		"weight": 2
      	},
      	{
      		"latitude": "40.660854605",
      		"longitude": "-73.922699231",
      		"weight": 1
      	},
      	{
      		"latitude": "40.828795454",
      		"longitude": "-73.886814229",
      		"weight": 2
      	},
      	{
      		"latitude": "40.694728158",
      		"longitude": "-73.941826747",
      		"weight": 1
      	},
      	{
      		"latitude": "40.599617626",
      		"longitude": "-74.132260144",
      		"weight": 3
      	},
      	{
      		"latitude": "40.689820267",
      		"longitude": "-73.983234001",
      		"weight": 2
      	},
      	{
      		"latitude": "40.612461845",
      		"longitude": "-74.138152806",
      		"weight": 2
      	},
      	{
      		"latitude": "40.821271027",
      		"longitude": "-73.951872345",
      		"weight": 3
      	},
      	{

      		"latitude": "40.835071256",
      		"longitude": "-73.930038774",
      		"weight": 2
      	},
      	{
      		"latitude": "40.682802875",
      		"longitude": "-73.938004477",
      		"weight": 1
      	},
      	{
      		"latitude": "40.853374828",
      		"longitude": "-73.916337616",
      		"weight": 2
      	},
      	{
      		"latitude": "40.710607547",
      		"longitude": "-74.003695041",
      		"weight": 2
      	},
      	{
      		"latitude": "40.769097361",
      		"longitude": "-73.941924247",
      		"weight": 2
      	},
      	{
      		"latitude": "40.597696037",
      		"longitude": "-73.749063296",
      		"weight": 2
      	},
      	{
      		"latitude": "40.831509327",
      		"longitude": "-73.863400811",
      		"weight": 3
      	},
      	{
      		"latitude": "40.6943809",
      		"longitude": "-73.976518204",
      		"weight": 3
      	},
      	{
      		"latitude": "40.862234975",
      		"longitude": "-73.864563273",
      		"weight": 3
      	},
      	{
      		"latitude": "40.748894419",
      		"longitude": "-73.882261755",
      		"weight": 1
      	},
      	{
      		"latitude": "40.749780113",
      		"longitude": "-73.987780874",
      		"weight": 2
      	},
      	{
      		"latitude": "40.743511609",
      		"longitude": "-73.994227355",
      		"weight": 3
      	},
      	{
      		"latitude": "40.862924369",
      		"longitude": "-73.893856575",
      		"weight": 1
      	},
      	{
      		"latitude": "40.7813835",
      		"longitude": "-73.949193028",
      		"weight": 2
      	},
      	{
      		"latitude": "40.822991576",
      		"longitude": "-73.89687219",
      		"weight": 2
      	},
      	{
      		"latitude": "40.82754677",
      		"longitude": "-73.937461313",
      		"weight": 2
      	},
      	{
      		"latitude": "40.812520134",
      		"longitude": "-73.902813002",
      		"weight": 3
      	},
      	{
      		"latitude": "40.755516375",
      		"longitude": "-73.970988622",
      		"weight": 2
      	},
      	{
      		"latitude": "40.598445031",
      		"longitude": "-73.950174852",
      		"weight": 2
      	},
      	{
      		"latitude": "40.758687362",
      		"longitude": "-73.995160935",
      		"weight": 3
      	},
      	{
      		"latitude": "40.73241152",
      		"longitude": "-74.01019824",
      		"weight": 2
      	},
      	{
      		"latitude": "40.623613926",
      		"longitude": "-73.942418268",
      		"weight": 2
      	},
      	{

      		"latitude": "40.574947785",
      		"longitude": "-74.105263909",
      		"weight": 2
      	},
      	{
      		"latitude": "40.73121983",
      		"longitude": "-73.755802055",
      		"weight": 3
      	},
      	{
      		"latitude": "40.673844225",
      		"longitude": "-73.916732256",
      		"weight": 1
      	},
      	{
      		"latitude": "40.775650691",
      		"longitude": "-73.958400695",
      		"weight": 2
      	},
      	{
      		"latitude": "40.634640535",
      		"longitude": "-74.132859187",
      		"weight": 2
      	},
      	{
      		"latitude": "40.63210564",
      		"longitude": "-73.918603738",
      		"weight": 1
      	},
      	{
      		"latitude": "40.889141961",
      		"longitude": "-73.835549385",
      		"weight": 2
      	},
      	{
      		"latitude": "40.723776501",
      		"longitude": "-73.989625588",
      		"weight": 3
      	},
      	{
      		"latitude": "40.767501886",
      		"longitude": "-73.959319141",
      		"weight": 3
      	},
      	{
      		"latitude": "40.554628056",
      		"longitude": "-74.173126879",
      		"weight": 2
      	},
      	{
      		"latitude": "40.89916777",
      		"longitude": "-73.871961284",
      		"weight": 2
      	},
      	{
      		"latitude": "40.63556405",
      		"longitude": "-73.969181633",
      		"weight": 1
      	},
      	{
      		"latitude": "40.593832161",
      		"longitude": "-73.960123479",
      		"weight": 2
      	},
      	{
      		"latitude": "40.877927083",
      		"longitude": "-73.880051642",
      		"weight": 2
      	},
      	{
      		"latitude": "40.721361487",
      		"longitude": "-74.004637224",
      		"weight": 2
      	},
      	{
      		"latitude": "40.613305542",
      		"longitude": "-73.917185953",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857238969",
      		"longitude": "-73.90517331",
      		"weight": 1
      	},
      	{
      		"latitude": "40.810956032",
      		"longitude": "-73.958042669",
      		"weight": 2
      	},
      	{
      		"latitude": "40.744024189",
      		"longitude": "-73.927543235",
      		"weight": 2
      	},
      	{

      		"latitude": "40.718547196",
      		"longitude": "-73.889364339",
      		"weight": 2
      	},
      	{
      		"latitude": "40.673711615",
      		"longitude": "-73.971442387",
      		"weight": 2
      	},
      	{
      		"latitude": "40.693334497",
      		"longitude": "-73.991736282",
      		"weight": 3
      	},
      	{
      		"latitude": "40.626156535",
      		"longitude": "-74.02400465",
      		"weight": 2
      	},
      	{
      		"latitude": "40.59306498",
      		"longitude": "-73.775318932",
      		"weight": 3
      	},
      	{
      		"latitude": "40.659469908",
      		"longitude": "-73.924838164",
      		"weight": 3
      	},
      	{
      		"latitude": "40.564384488",
      		"longitude": "-74.123113367",
      		"weight": 2
      	},
      	{
      		"latitude": "40.862743304",
      		"longitude": "-73.903321669",
      		"weight": 2
      	},
      	{
      		"latitude": "40.875126333",
      		"longitude": "-73.866496863",
      		"weight": 2
      	},
      	{
      		"latitude": "40.747521791",
      		"longitude": "-73.996876033",
      		"weight": 2
      	},
      	{
      		"latitude": "40.880543131",
      		"longitude": "-73.883073723",
      		"weight": 3
      	},
      	{
      		"latitude": "40.826438728",
      		"longitude": "-73.950452191",
      		"weight": 2
      	},
      	{
      		"latitude": "40.682153561",
      		"longitude": "-73.979760238",
      		"weight": 2
      	},
      	{
      		"latitude": "40.834195188",
      		"longitude": "-73.909575151",
      		"weight": 2
      	},
      	{
      		"latitude": "40.64010787",
      		"longitude": "-74.006559295",
      		"weight": 2
      	},
      	{
      		"latitude": "40.679226083",
      		"longitude": "-73.927974168",
      		"weight": 1
      	},
      	{
      		"latitude": "40.607872494",
      		"longitude": "-73.971711846",
      		"weight": 2
      	},
      	{
      		"latitude": "40.637435371",
      		"longitude": "-73.897227409",
      		"weight": 2
      	},
      	{
      		"latitude": "40.631111824",
      		"longitude": "-73.952531869",
      		"weight": 1
      	},
      	{
      		"latitude": "40.818928532",
      		"longitude": "-73.887163398",
      		"weight": 2
      	},
      	{
      		"latitude": "40.750549545",
      		"longitude": "-73.788253713",
      		"weight": 2
      	},
      	{
      		"latitude": "40.832513725",
      		"longitude": "-73.914546188",
      		"weight": 2
      	},
      	{
      		"latitude": "40.678934591",
      		"longitude": "-73.953575819",
      		"weight": 2
      	},
      	{
      		"latitude": "40.688702979",
      		"longitude": "-73.922508291",
      		"weight": 3
      	},
      	{
      		"latitude": "40.654254118",
      		"longitude": "-73.94848255",
      		"weight": 1
      	},
      	{
      		"latitude": "40.803985922",
      		"longitude": "-73.915666438",
      		"weight": 3

      	},
      	{
      		"latitude": "40.752198698",
      		"longitude": "-73.993465045",
      		"weight": 2
      	},
      	{
      		"latitude": "40.764277606",
      		"longitude": "-73.832561814",
      		"weight": 3
      	},
      	{
      		"latitude": "40.627307984",
      		"longitude": "-73.922932622",
      		"weight": 2
      	},
      	{
      		"latitude": "40.754110952",
      		"longitude": "-73.740645296",
      		"weight": 3
      	},
      	{
      		"latitude": "40.649293462",
      		"longitude": "-73.897911868",
      		"weight": 3
      	},
      	{
      		"latitude": "40.795320125",
      		"longitude": "-73.93591331",
      		"weight": 3
      	},
      	{
      		"latitude": "40.59415002",
      		"longitude": "-73.958603779",
      		"weight": 2
      	},
      	{
      		"latitude": "40.584256706",
      		"longitude": "-74.168656624",
      		"weight": 2
      	},
      	{
      		"latitude": "40.833776359",
      		"longitude": "-73.918429299",
      		"weight": 1
      	},
      	{
      		"latitude": "40.723636973",
      		"longitude": "-73.998298598",
      		"weight": 2
      	},
      	{
      		"latitude": "40.610334433",
      		"longitude": "-73.971138147",
      		"weight": 1
      	},
      	{
      		"latitude": "40.691094994",
      		"longitude": "-73.996074542",
      		"weight": 3
      	},
      	{
      		"latitude": "40.799393541",
      		"longitude": "-73.970196568",
      		"weight": 2
      	},
      	{
      		"latitude": "40.878100847",
      		"longitude": "-73.865861686",
      		"weight": 2
      	},
      	{
      		"latitude": "40.68336304",
      		"longitude": "-73.974867134",
      		"weight": 2
      	},
      	{
      		"latitude": "40.750636197",
      		"longitude": "-73.87594619",
      		"weight": 3
      	},
      	{
      		"latitude": "40.62454224",
      		"longitude": "-73.956167736",
      		"weight": 3
      	},
      	{
      		"latitude": "40.792881393",
      		"longitude": "-73.943723688",
      		"weight": 3
      	},
      	{
      		"latitude": "40.691633104",
      		"longitude": "-73.788246091",
      		"weight": 2
      	},
      	{
      		"latitude": "40.702163374",
      		"longitude": "-73.791974307",
      		"weight": 2
      	},
      	{
      		"latitude": "40.615080824",
      		"longitude": "-73.992624821",
      		"weight": 2
      	},
      	{
      		"latitude": "40.71407409",
      		"longitude": "-73.949374192",
      		"weight": 2
      	},
      	{
      		"latitude": "40.634491901",
      		"longitude": "-74.118151787",
      		"weight": 2
      	},
      	{
      		"latitude": "40.706222013",
      		"longitude": "-73.950974356",
      		"weight": 2
      	},
      	{

      		"latitude": "40.821910376",
      		"longitude": "-73.903467704",
      		"weight": 1
      	},
      	{
      		"latitude": "40.748871688",
      		"longitude": "-73.892710144",
      		"weight": 2
      	},
      	{
      		"latitude": "40.640489311",
      		"longitude": "-73.992095942",
      		"weight": 3
      	},
      	{

      		"latitude": "40.687200784",
      		"longitude": "-73.794577477",
      		"weight": 3
      	},
      	{
      		"latitude": "40.859339794",
      		"longitude": "-73.900007958",
      		"weight": 2
      	},
      	{
      		"latitude": "40.650815388",
      		"longitude": "-73.949573551",
      		"weight": 2
      	},
      	{
      		"latitude": "40.65462789",
      		"longitude": "-74.004185687",
      		"weight": 2
      	},
      	{
      		"latitude": "40.834602331",
      		"longitude": "-73.914384501",
      		"weight": 2
      	},
      	{
      		"latitude": "40.686608285",
      		"longitude": "-73.917924236",
      		"weight": 2
      	},
      	{
      		"latitude": "40.887451313",
      		"longitude": "-73.847607787",
      		"weight": 1
      	},
      	{
      		"latitude": "40.883773783",
      		"longitude": "-73.891664283",
      		"weight": 2
      	},
      	{
      		"latitude": "40.816899683",
      		"longitude": "-73.863824592",
      		"weight": 2
      	},
      	{
      		"latitude": "40.600824999",
      		"longitude": "-74.13015229",
      		"weight": 1

      	},
      	{
      		"latitude": "40.853993366",
      		"longitude": "-73.934884396",
      		"weight": 1

      	},
      	{
      		"latitude": "40.809858783",
      		"longitude": "-73.935624768",
      		"weight": 2

      	},
      	{
      		"latitude": "40.686589649",
      		"longitude": "-73.790537328",
      		"weight": 2

      	},
      	{
      		"latitude": "40.801808928",
      		"longitude": "-73.961078876",
      		"weight": 2
      	},
      	{
      		"latitude": "40.592784486",
      		"longitude": "-73.988360498",
      		"weight": 2
      	},
      	{
      		"latitude": "40.740228615",
      		"longitude": "-73.948766113",
      		"weight": 1
      	},
      	{
      		"latitude": "40.670946067",
      		"longitude": "-73.921090573",
      		"weight": 3
      	},
      	{
      		"latitude": "40.710750383",
      		"longitude": "-73.964605617",
      		"weight": 3
      	},
      	{
      		"latitude": "40.693647983",
      		"longitude": "-73.913306961",
      		"weight": 3
      	},
      	{
      		"latitude": "40.635993078",
      		"longitude": "-74.037245587",
      		"weight": 1
      	},
      	{
      		"latitude": "40.752480305",
      		"longitude": "-73.878176911",
      		"weight": 2
      	},
      	{
      		"latitude": "40.716028413",
      		"longitude": "-74.004755895",
      		"weight": 2
      	},
      	{
      		"latitude": "40.703967423",
      		"longitude": "-73.895692995",
      		"weight": 2

      	},
      	{
      		"latitude": "40.808674112",
      		"longitude": "-73.948652019",
      		"weight": 2
      	},
      	{
      		"latitude": "40.811522012",
      		"longitude": "-73.940601181",
      		"weight": 2
      	},
      	{
      		"latitude": "40.576314904",
      		"longitude": "-73.969284564",
      		"weight": 2
      	},
      	{
      		"latitude": "40.75559561",
      		"longitude": "-73.738105662",
      		"weight": 2
      	},
      	{
      		"latitude": "40.642142204",
      		"longitude": "-73.929354633",
      		"weight": 2
      	},
      	{
      		"latitude": "40.833600231",
      		"longitude": "-73.888378014",
      		"weight": 3
      	},
      	{
      		"latitude": "40.729182027",
      		"longitude": "-73.845483787",
      		"weight": 2
      	},
      	{
      		"latitude": "40.679700408",
      		"longitude": "-73.776047368",
      		"weight": 2
      	},
      	{
      		"latitude": "40.696329709",
      		"longitude": "-73.783972176",
      		"weight": 3
      	},
      	{
      		"latitude": "40.74943967",
      		"longitude": "-73.986925574",
      		"weight": 2
      	},
      	{
      		"latitude": "40.668637618",
      		"longitude": "-73.957259839",
      		"weight": 2
      	},
      	{
      		"latitude": "40.660956196",
      		"longitude": "-73.960663655",
      		"weight": 2
      	},
      	{
      		"latitude": "40.670844376",
      		"longitude": "-73.845269262",
      		"weight": 3
      	},
      	{
      		"latitude": "40.663189455",
      		"longitude": "-73.910052066",
      		"weight": 1
      	},
      	{
      		"latitude": "40.67723037",
      		"longitude": "-73.915484226",
      		"weight": 2
      	},

      	{
      		"latitude": "40.674072756",
      		"longitude": "-73.9670657",
      		"weight": 1
      	},
      	{
      		"latitude": "40.634940607",
      		"longitude": "-73.979875437",
      		"weight": 2
      	},
      	{
      		"latitude": "40.866622136",
      		"longitude": "-73.858639391",
      		"weight": 2

      	},
      	{
      		"latitude": "40.618030551",
      		"longitude": "-73.922882097",
      		"weight": 2
      	},
      	{
      		"latitude": "40.716514555",
      		"longitude": "-73.975893551",
      		"weight": 2
      	},
      	{
      		"latitude": "40.624926626",
      		"longitude": "-73.974853113",
      		"weight": 2
      	},
      	{
      		"latitude": "40.70723571",
      		"longitude": "-73.804499509",
      		"weight": 3
      	},
      	{
      		"latitude": "40.757591373",
      		"longitude": "-73.866122413",
      		"weight": 2
      	},
      	{
      		"latitude": "40.812512958",
      		"longitude": "-73.952680664",
      		"weight": 3
      	},
      	{
      		"latitude": "40.827520105",
      		"longitude": "-73.877013331",
      		"weight": 2
      	},
      	{
      		"latitude": "40.72618713",
      		"longitude": "-73.735233904",
      		"weight": 3
      	},
      	{
      		"latitude": "40.675054839",
      		"longitude": "-73.938869695",
      		"weight": 2
      	},
      	{
      		"latitude": "40.580319776",
      		"longitude": "-73.953543563",
      		"weight": 1
      	},
      	{
      		"latitude": "40.858865278",
      		"longitude": "-73.903605666",
      		"weight": 3
      	},
      	{
      		"latitude": "40.648398594",
      		"longitude": "-73.926605621",
      		"weight": 2
      	},
      	{
      		"latitude": "40.843065226",
      		"longitude": "-73.848537121",
      		"weight": 3
      	},
      	{
      		"latitude": "40.826524046",
      		"longitude": "-73.893867666",
      		"weight": 2
      	},
      	{
      		"latitude": "40.679326777",
      		"longitude": "-73.981754845",
      		"weight": 3
      	},
      	{
      		"latitude": "40.719219754",
      		"longitude": "-73.985492111",
      		"weight": 3
      	},
      	{
      		"latitude": "40.838424184",
      		"longitude": "-73.866530759",
      		"weight": 2
      	},
      	{
      		"latitude": "40.755825694",
      		"longitude": "-73.967837415",
      		"weight": 2
      	},
      	{
      		"latitude": "40.823833011",
      		"longitude": "-73.868695407",
      		"weight": 2
      	},
      	{
      		"latitude": "40.85742325",
      		"longitude": "-73.902346124",
      		"weight": 2
      	},
      	{
      		"latitude": "40.577894012",
      		"longitude": "-74.010865814",
      		"weight": 1
      	},
      	{
      		"latitude": "40.695433579",
      		"longitude": "-73.985118635",
      		"weight": 2
      	},
      	{
      		"latitude": "40.690938762",
      		"longitude": "-73.92915509",
      		"weight": 1
      	},
      	{
      		"latitude": "40.87054946",
      		"longitude": "-73.865236939",
      		"weight": 2
      	},
      	{
      		"latitude": "40.632429754",
      		"longitude": "-73.947224005",
      		"weight": 3
      	},
      	{
      		"latitude": "40.851477773",
      		"longitude": "-73.895566506",
      		"weight": 2
      	},
      	{
      		"latitude": "40.637129001",
      		"longitude": "-74.107624718",
      		"weight": 2
      	},
      	{
      		"latitude": "40.821158404",
      		"longitude": "-73.822645461",
      		"weight": 1
      	},
      	{
      		"latitude": "40.847879012",
      		"longitude": "-73.936404846",
      		"weight": 2
      	},
      	{
      		"latitude": "40.749909735",
      		"longitude": "-74.002560339",
      		"weight": 3
      	},
      	{
      		"latitude": "40.880980812",
      		"longitude": "-73.912390073",
      		"weight": 1
      	},
        {
      		"latitude": "40.756916248",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.98596397",
      		"weight": 2
      	},
      	{
      		"latitude": "40.590807962",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.971222198",
      		"weight": 3
      	},
      	{
      		"latitude": "40.861906582",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.897440898",
      		"weight": 2
      	},
      	{
      		"latitude": "40.729851106",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.001506013",
      		"weight": 2
      	},
      	{
      		"latitude": "40.80680544",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.924574265",
      		"weight": 2
      	},
      	{
      		"latitude": "40.645556189",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.90565793",
      		"weight": 2
      	},
      	{
      		"latitude": "40.702224469",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.932417867",
      		"weight": 3
      	},
      	{
      		"latitude": "40.861886273",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.89320749",
      		"weight": 2
      	},
      	{
      		"latitude": "40.752198698",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.993465045",
      		"weight": 3
      	},
      	{
      		"latitude": "40.676403773",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.898032604",
      		"weight": 3
      	},
      	{
      		"latitude": "40.656791478",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.913780142",
      		"weight": 3
      	},
      	{
      		"latitude": "40.856609196",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "OPPOSITE OF",
      		"longitude": "-73.849742591",
      		"weight": 2
      	},
      	{
      		"latitude": "40.630700627",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.015478674",
      		"weight": 2
      	},
      	{
      		"latitude": "40.666705359",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.767129803",
      		"weight": 3
      	},
      	{
      		"latitude": "40.810297536",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "OPPOSITE OF",
      		"longitude": "-73.945489891",
      		"weight": 3
      	},
      	{
      		"latitude": "40.630754299",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.97716746",
      		"weight": 3
      	},
      	{
      		"latitude": "40.718073929",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.94496648",
      		"weight": 3
      	},
      	{
      		"latitude": "40.785153342",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.845769171",
      		"weight": 1
      	},
      	{
      		"latitude": "40.745400855",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.97836603",
      		"weight": 2
      	},
      	{
      		"latitude": "40.817778305",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.857272715",
      		"weight": 2
      	},
      	{
      		"latitude": "40.854092353",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.86771751",
      		"weight": 2
      	},
      	{
      		"latitude": "40.734184466",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.814852071",
      		"weight": 2
      	},
      	{
      		"latitude": "40.741775684",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "OPPOSITE OF",
      		"longitude": "-73.952922162",
      		"weight": 2
      	},
      	{
      		"latitude": "40.649438899",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.8918646",
      		"weight": 2
      	},
      	{
      		"latitude": "40.862358928",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.899963651",
      		"weight": 2
      	},
      	{
      		"latitude": "40.661440353",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.916434159",
      		"weight": 2
      	},
      	{
      		"latitude": "40.889789577",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.86275301",
      		"weight": 3
      	},
      	{
      		"latitude": "40.578015318",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.964549958",
      		"weight": 3
      	},
      	{
      		"latitude": "40.739402283",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.988472017",
      		"weight": 3
      	},
      	{
      		"latitude": "40.765601524",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.825796934",
      		"weight": 1
      	},
      	{
      		"latitude": "40.822262072",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.940537398",
      		"weight": 3
      	},
      	{
      		"latitude": "40.677847848",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.875998665",
      		"weight": 2
      	},
      	{
      		"latitude": "40.832238366",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.857982489",
      		"weight": 2
      	},
      	{
      		"latitude": "40.760185479",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.767842585",
      		"weight": 3
      	},
      	{
      		"latitude": "40.72000018",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.000246759",
      		"weight": 2
      	},
      	{
      		"latitude": "40.738985576",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.995663956",
      		"weight": 3
      	},
      	{
      		"latitude": "40.885452161",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "OPPOSITE OF",
      		"longitude": "-73.840755451",
      		"weight": 2
      	},
      	{
      		"latitude": "40.682343206",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.981274489",
      		"weight": 2
      	},
      	{
      		"latitude": "40.75473732",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.989757926",
      		"weight": 3
      	},
      	{
      		"latitude": "40.809279354",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.940176921",
      		"weight": 3
      	},
      	{
      		"latitude": "40.69726035",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.977462042",
      		"weight": 3
      	},
      	{
      		"latitude": "40.744054805",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.881660413",
      		"weight": 2
      	},
      	{
      		"latitude": "40.793239543",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.946529525",
      		"weight": 2
      	},
      	{
      		"latitude": "40.624409899",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.932312935",
      		"weight": 1
      	},
      	{
      		"latitude": "40.846950199",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.88526528",
      		"weight": 3
      	},
      	{
      		"latitude": "40.711071595",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.950004099",
      		"weight": 3
      	},
      	{
      		"latitude": "40.8373694",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.868209727",
      		"weight": 2
      	},
      	{
      		"latitude": "40.706599944",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.795606957",
      		"weight": 2
      	},
      	{
      		"latitude": "40.714439287",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.744861425",
      		"weight": 2
      	},
      	{
      		"latitude": "40.819273544",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.868270853",
      		"weight": 3
      	},
      	{
      		"latitude": "40.594786154",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.125470316",
      		"weight": 3
      	},
      	{
      		"latitude": "40.726724661",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.853260911",
      		"weight": 3
      	},
      	{

      		"latitude": "40.685468259",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.974765382",
      		"weight": 3
      	},
      	{
      		"latitude": "40.712997905",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.009463017",
      		"weight": 3
      	},
      	{
      		"latitude": "40.718540519",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.977530603",
      		"weight": 2
      	},
      	{
      		"latitude": "40.664239422",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.908425011",
      		"weight": 2
      	},
      	{
      		"latitude": "40.635928629",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.897391864",
      		"weight": 1
      	},
      	{

      		"latitude": "40.773104893",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.795283696",
      		"weight": 3
      	},
      	{
      		"latitude": "40.695419764",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.834440477",
      		"weight": 1
      	},
      	{

      		"latitude": "40.743046829",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.984360984",
      		"weight": 3
      	},
        {
      		"latitude": "40.83609649",
      		"longitude": "-73.889743468",
      		"weight": 3
      	},
      	{
      		"latitude": "40.752823181",
      		"longitude": "-73.981373788",
      		"weight": 3
      	},
      	{
      		"latitude": "40.775772829",
      		"longitude": "-73.954750345",
      		"weight": 3
      	},
      	{
      		"latitude": "40.660202207",
      		"longitude": "-73.758776078",
      		"weight": 1
      	},
      	{
      		"latitude": "40.872596004",
      		"longitude": "-73.825563635",
      		"weight": 1
      	},
      	{
      		"latitude": "40.707477574",
      		"longitude": "-73.931777734",
      		"weight": 2
      	},
      	{
      		"latitude": "40.85564181",
      		"longitude": "-73.912445139",
      		"weight": 2
      	},
      	{
      		"latitude": "40.631916443",
      		"longitude": "-73.907943357",
      		"weight": 3
      	},
      	{
      		"latitude": "40.752809101",
      		"longitude": "-73.979287609",
      		"weight": 1
      	},
      	{
      		"latitude": "40.886651136",
      		"longitude": "-73.859424999",
      		"weight": 2
      	},
      	{
      		"latitude": "40.732621998",
      		"longitude": "-73.848138679",
      		"weight": 2
      	},
      	{
      		"latitude": "40.642266777",
      		"longitude": "-74.108123059",
      		"weight": 3
      	},
      	{
      		"latitude": "40.716963396",
      		"longitude": "-73.984233629",
      		"weight": 2
      	},
      	{
      		"latitude": "40.78307848",
      		"longitude": "-73.946396856",
      		"weight": 3
      	},
      	{
      		"latitude": "40.75971947",
      		"longitude": "-73.905882473",
      		"weight": 1
      	},
      	{
      		"latitude": "40.710783222",
      		"longitude": "-73.996632474",
      		"weight": 2
      	},
      	{
      		"latitude": "40.772656213",
      		"longitude": "-73.958489214",
      		"weight": 2
      	},
      	{
      		"latitude": "40.632359823",
      		"longitude": "-73.887950809",
      		"weight": 2
      	},
      	{
      		"latitude": "40.814678852",
      		"longitude": "-73.936227034",
      		"weight": 1
      	},
      	{
      		"latitude": "40.688040723",
      		"longitude": "-73.951103109",
      		"weight": 3
      	},
      	{
      		"latitude": "40.693777815",
      		"longitude": "-73.907324243",
      		"weight": 2
      	},
      	{
      		"latitude": "40.779168082",
      		"longitude": "-73.954784146",
      		"weight": 2
      	},
      	{
      		"latitude": "40.893901834",
      		"longitude": "-73.85879478",
      		"weight": 2
      	},
      	{
      		"latitude": "40.827990582",
      		"longitude": "-73.8889475",
      		"weight": 2
      	},
      	{
      		"latitude": "40.732293315",
      		"longitude": "-73.987921193",
      		"weight": 2
      	},
      	{
      		"latitude": "40.812378735",
      		"longitude": "-73.953338242",
      		"weight": 1
      	},
      	{
      		"latitude": "40.662147595",
      		"longitude": "-73.927210452",
      		"weight": 3
      	},
      	{
      		"latitude": "40.763847969",
      		"longitude": "-73.869665603",
      		"weight": 2
      	},
      	{
      		"latitude": "40.68336304",
      		"longitude": "-73.974867134",
      		"weight": 2
      	},
      	{
      		"latitude": "40.773331984",
      		"longitude": "-73.960088211",
      		"weight": 2
      	},
      	{
      		"latitude": "40.790604556",
      		"longitude": "-73.946430523",
      		"weight": 2
      	},
      	{
      		"latitude": "40.838830228",
      		"longitude": "-73.942629539",
      		"weight": 2
      	},
      	{
      		"latitude": "40.593021971",
      		"longitude": "-73.97908872",
      		"weight": 2
      	},
      	{
      		"latitude": "40.668608913",
      		"longitude": "-73.985124619",
      		"weight": 2
      	},
      	{
      		"latitude": "40.666262679",
      		"longitude": "-73.90547004",
      		"weight": 2
      	},
      	{
      		"latitude": "40.800236556",
      		"longitude": "-73.962148913",
      		"weight": 1
      	},
      	{
      		"latitude": "40.739161316",
      		"longitude": "-74.001105672",
      		"weight": 2
      	},
      	{
      		"latitude": "40.758228256",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.986122517",
      		"weight": 3
      	},
      	{
      		"latitude": "40.722022881",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.993460788",
      		"weight": 1
      	},
      	{
      		"latitude": "40.635227622",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.168673754",
      		"weight": 2
      	},
      	{
      		"latitude": "40.671971711",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.955130789",
      		"weight": 2
      	},
      	{
      		"latitude": "40.609294264",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.92771467",
      		"weight": 1
      	},
      	{
      		"latitude": "40.694519657",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.971130558",
      		"weight": 3
      	},
      	{
      		"latitude": "40.822892744",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.950899244",
      		"weight": 2
      	},
      	{
      		"latitude": "40.760678193",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.872480185",
      		"weight": 2
      	},
      	{
      		"latitude": "40.721461728",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.84397927",
      		"weight": 2
      	},
      	{
      		"latitude": "40.717416723",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.987880599",
      		"weight": 2
      	},
      	{
      		"latitude": "40.822843728",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.903643392",
      		"weight": 2
      	},
      	{
      		"latitude": "40.820071677",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.94032619",
      		"weight": 2
      	},
      	{
      		"latitude": "40.761521334",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.807607034",
      		"weight": 3
      	},
      	{
      		"latitude": "40.737702531",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.982514688",
      		"weight": 2
      	},
      	{
      		"latitude": "40.680465388",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.843653352",
      		"weight": 3
      	},
      	{
      		"latitude": "40.742997406",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.984234687",
      		"weight": 1
      	},
      	{
      		"latitude": "40.610717129",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.920985283",
      		"weight": 2
      	},
      	{
      		"latitude": "40.66003879",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.921788291",
      		"weight": 3
      	},
      	{
      		"latitude": "40.835127063",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.922861751",
      		"weight": 2
      	},
      	{
      		"latitude": "40.856162957",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.844397124",
      		"weight": 2
      	},
      	{
      		"latitude": "40.7416892",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.002985851",
      		"weight": 3
      	},
      	{
      		"latitude": "40.757240531",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.989793637",
      		"weight": 2
      	},
      	{
      		"latitude": "40.827697536",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.876102433",
      		"weight": 3
      	},
      	{
      		"latitude": "40.622543771",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.963258311",
      		"weight": 3
      	},
      	{
      		"latitude": "40.812866866",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.918104507",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857714908",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.903198838",
      		"weight": 3
      	},
      	{
      		"latitude": "40.684461543",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.97775121",
      		"weight": 3
      	},
      	{
      		"latitude": "40.683396187",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.813734741",
      		"weight": 2
      	},
      	{
      		"latitude": "40.831863965",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.857076274",
      		"weight": 2
      	},
      	{
      		"latitude": "40.721675039",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.944934646",
      		"weight": 3
      	},
      	{
      		"latitude": "40.815593159",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.901558513",
      		"weight": 1
      	},
      	{
      		"latitude": "40.639109197",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "OPPOSITE OF",
      		"longitude": "-73.909717001",
      		"weight": 3
      	},
      	{
      		"latitude": "40.82655639",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.924479611",
      		"weight": 2
      	},
      	{
      		"latitude": "40.811393119",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.922314872",
      		"weight": 2
      	},
      	{
      		"latitude": "40.614811915",
      		"law_cat_cd": "FELONY",
      		"longitude": "-74.005980512",
      		"weight": 3
      	},
      	{
      		"latitude": "40.761406349",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.793507538",
      		"weight": 3
      	},
      	{
      		"latitude": "40.673772142",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.92360715",
      		"weight": 2
      	},
      	{
      		"latitude": "40.840792611",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.93719949",
      		"weight": 2
      	},
      	{
      		"latitude": "40.833217042",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.927554515",
      		"weight": 2
      	},
      	{
      		"latitude": "40.718964382",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.984655232",
      		"weight": 2
      	},
      	{
      		"latitude": "40.668155231",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.952054916",
      		"weight": 3
      	},
      	{
      		"latitude": "40.680579719",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.974316558",
      		"weight": 3
      	},
      	{
      		"latitude": "40.750430768",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.989282176",
      		"weight": 3
      	},
      	{
      		"latitude": "40.817607691",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.919081362",
      		"weight": 3
      	},
      	{
      		"latitude": "40.70910984",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.940079255",
      		"weight": 2
      	},
      	{
      		"latitude": "40.804199208",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.952726307",
      		"weight": 3
      	},
      	{
      		"latitude": "40.741557019",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.989575907",
      		"weight": 3
      	},
      	{
      		"latitude": "40.815669883",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.936565681",
      		"weight": 2
      	},
      	{
      		"latitude": "40.588570704",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.147306103",
      		"weight": 2
      	},
      	{
      		"latitude": "40.684194302",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.916084746",
      		"weight": 2
      	},
      	{
      		"latitude": "40.735006211",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.909911822",
      		"weight": 2
      	},
      	{
      		"latitude": "40.726873992",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.851986989",
      		"weight": 3
      	},
      	{
      		"latitude": "40.684929869",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.955327592",
      		"weight": 3
      	},
      	{
      		"latitude": "40.602951591",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.749976261",
      		"weight": 3
      	},
      	{
      		"latitude": "40.750430768",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.989282176",
      		"weight": 2
      	},
      	{
      		"latitude": "40.629296921",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.891104655",
      		"weight": 3
      	},
      	{
      		"latitude": "40.724281637",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.99081968",
      		"weight": 3
      	},
      	{
      		"latitude": "40.710403418",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.850447293",
      		"weight": 2
      	},
      	{
      		"latitude": "40.654696475",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.928746678",
      		"weight": 3
      	},
      	{
      		"latitude": "40.659610961",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.883327612",
      		"weight": 2
      	},
      	{
      		"latitude": "40.639235511",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.079018941",
      		"weight": 2
      	},
      	{
      		"latitude": "40.757044184",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.906918583",
      		"weight": 2
      	},
      	{
      		"latitude": "40.687452105",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.923616718",
      		"weight": 2
      	},
      	{
      		"latitude": "40.726581146",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.852644276",
      		"weight": 2
      	},
      	{
      		"latitude": "40.674757125",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.941696356",
      		"weight": 2
      	},
      	{
      		"latitude": "40.822942606",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.951983142",
      		"weight": 2
      	},
      	{
      		"latitude": "40.75296345",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.892003346",
      		"weight": 2
      	},
      	{
      		"latitude": "40.502342893",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.247507319",
      		"weight": 3
      	},
      	{
      		"latitude": "40.700703332",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.780254127",
      		"weight": 1
      	},
      	{
      		"latitude": "40.634379566",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.964080464",
      		"weight": 2
      	},
      	{
      		"latitude": "40.631712142",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.957524871",
      		"weight": 2
      	},
      	{
      		"latitude": "40.810297536",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.945489891",
      		"weight": 1
      	},
      	{
      		"latitude": "40.761357343",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.986789673",
      		"weight": 2
      	},
      	{
      		"latitude": "40.694074736",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.801418786",
      		"weight": 2
      	},
      	{
      		"latitude": "40.869058532",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.879630148",
      		"weight": 3
      	},
      	{
      		"latitude": "40.671269373",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.943415337",
      		"weight": 2
      	},
      	{
      		"latitude": "40.741637004",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.995584392",
      		"weight": 2
      	},
      	{
      		"latitude": "40.612692994",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.949541117",
      		"weight": 2
      	},
      	{
      		"latitude": "40.684850817",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.792803529",
      		"weight": 3
      	},
      	{
      		"latitude": "40.577775376",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.116197528",
      		"weight": 2
      	},
      	{
      		"latitude": "40.76950909",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.844303547",
      		"weight": 2
      	},
      	{
      		"latitude": "40.552059115",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "REAR OF",
      		"longitude": "-74.145257243",
      		"weight": 2
      	},
      	{
      		"latitude": "40.754815884",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.868026548",
      		"weight": 2
      	},
      	{
      		"latitude": "40.69718023",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.933522902",
      		"weight": 3
      	},
      	{
      		"latitude": "40.803124692",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.95632105",
      		"weight": 2
      	},
      	{
      		"latitude": "40.604626704",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-74.162380586",
      		"weight": 2
      	},
      	{
      		"latitude": "40.815732053",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.945420411",
      		"weight": 2
      	},
      	{
      		"latitude": "40.672071456",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.925245742",
      		"weight": 2
      	},
      	{
      		"latitude": "40.649037151",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.917087548",
      		"weight": 2
      	},
      	{
      		"latitude": "40.826366574",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.89883621",
      		"weight": 2
      	},
      	{
      		"latitude": "40.629552088",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.966075326",
      		"weight": 2
      	},
      	{
      		"latitude": "40.757578112",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.989544524",
      		"weight": 2
      	},
      	{
      		"latitude": "40.703772564",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.942615925",
      		"weight": 3
      	},
      	{
      		"latitude": "40.647134377",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.893039504",
      		"weight": 2
      	},
      	{
      		"latitude": "40.707018758",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.946522939",
      		"weight": 2
      	},
      	{
      		"latitude": "40.892315066",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.839625007",
      		"weight": 2
      	},
      	{
      		"latitude": "40.616343401",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-74.026302755",
      		"weight": 2
      	},
      	{
      		"latitude": "40.683278136",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.950154736",
      		"weight": 2
      	},
      	{
      		"latitude": "40.852399561",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.889217613",
      		"weight": 2
      	},
      	{
      		"latitude": "40.734226128",
      		"law_cat_cd": "FELONY",
      		"longitude": "-74.005406689",
      		"weight": 3
      	},
      	{
      		"latitude": "40.672789843",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.773651622",
      		"weight": 2
      	},
      	{
      		"latitude": "40.827115607",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.948030747",
      		"weight": 3
      	},
      	{
      		"latitude": "40.716908753",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.986203266",
      		"weight": 2
      	},
      	{
      		"latitude": "40.618835771",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.025867888",
      		"weight": 2
      	},
      	{
      		"latitude": "40.841361759",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.849299965",
      		"weight": 2
      	},
      	{
      		"latitude": "40.696819963",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.789322324",
      		"weight": 2
      	},
      	{
      		"latitude": "40.894877683",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.853381629",
      		"weight": 2
      	},
      	{
      		"latitude": "40.848194523",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.936169602",
      		"weight": 2
      	},
      	{
      		"latitude": "40.605247178",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.966879968",
      		"weight": 3
      	},
      	{
      		"latitude": "40.834516921",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.917709256",
      		"weight": 3
      	},
      	{
      		"latitude": "40.741506303",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.979738601",
      		"weight": 2
      	},
      	{
      		"latitude": "40.654848723",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.959697777",
      		"weight": 2
      	},
      	{
      		"latitude": "40.871449204",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.867158697",
      		"weight": 3
      	},
      	{
      		"latitude": "40.735559889",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.991464028",
      		"weight": 2
      	},
      	{
      		"latitude": "40.5761573",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.9759838",
      		"weight": 2
      	},
      	{
      		"latitude": "40.679700408",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.776047368",
      		"weight": 2
      	},
      	{
      		"latitude": "40.835071256",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "REAR OF",
      		"longitude": "-73.930038774",
      		"weight": 2
      	},
      	{
      		"latitude": "40.797056157",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.964476664",
      		"weight": 1
      	},
      	{
      		"latitude": "40.859337124",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.903315775",
      		"weight": 2
      	},
      	{
      		"latitude": "40.76192858",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.990088922",
      		"weight": 2
      	},
      	{
      		"latitude": "40.756016814",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.735053976",
      		"weight": 3
      	},
      	{
      		"latitude": "40.984768102",
      		"longitude": "-73.8779457757",
      		"weight": 3
      	},
      	{
      		"latitude": "40.711467938",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.796461337",
      		"weight": 2
      	},
      	{
      		"latitude": "40.632110394",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.921493167",
      		"weight": 2
      	},
      	{
      		"latitude": "40.862624432",
      		"law_cat_cd": "VIOLATION",
      		"longitude": "-73.890108015",
      		"weight": 1
      	},
      	{
      		"latitude": "40.533907054",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.236432376",
      		"weight": 2
      	},
      	{
      		"latitude": "40.600816077",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.991970997",
      		"weight": 3
      	},
      	{
      		"latitude": "40.63666405",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.978311202",
      		"weight": 2
      	},
      	{
      		"latitude": "40.60982649",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.904754002",
      		"weight": 2

      	},
      	{
      		"latitude": "40.7691483",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.958115939",
      		"weight": 2
      	},
      	{
      		"latitude": "40.748463142",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.994331589",
      		"weight": 2
      	},
      	{
      		"latitude": "40.587568524",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "OPPOSITE OF",
      		"longitude": "-73.946593386",
      		"weight": 3
      	},
      	{
      		"latitude": "40.844696738",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.86493511",
      		"weight": 2
      	},
      	{
      		"latitude": "40.687685606",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.989825915",
      		"weight": 2
      	},
      	{
      		"latitude": "40.805182009",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "REAR OF",
      		"longitude": "-73.9186305",
      		"weight": 2
      	},
      	{
      		"latitude": "40.867231589",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.926624425",
      		"weight": 3

      	},
      	{
      		"latitude": "40.675544968",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.870995416",
      		"weight": 2
      	},
      	{
      		"latitude": "40.835581344",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.90967084",
      		"weight": 1
      	},
      	{
      		"latitude": "40.614685856",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.913038517",
      		"weight": 3
      	},
      	{
      		"latitude": "40.713455065",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.762060691",
      		"weight": 2
      	},
      	{
      		"latitude": "40.787776097",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.881914936",
      		"weight": 3
      	},
      	{
      		"latitude": "40.81305566",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.888018698",
      		"weight": 2
      	},
      	{
      		"latitude": "40.885618814",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.866081591",
      		"weight": 3
      	},
      	{
      		"latitude": "40.573909069",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-74.00049459",
      		"weight": 3
      	},
      	{
      		"latitude": "40.695140908",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.975125947",
      		"weight": 2
      	},
      	{
      		"latitude": "40.827603452",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.85003212",
      		"weight": 3
      	},
      	{
      		"latitude": "40.721461728",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.84397927",
      		"weight": 2
      	},
      	{
      		"latitude": "40.689498668",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.922071054",
      		"weight": 3
      	},
      	{
      		"latitude": "40.684401533",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.907149782",
      		"weight": 2
      	},
      	{
      		"latitude": "40.705699282",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.93715363",
      		"weight": 3
      	},
      	{
      		"latitude": "40.666448616",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.953609743",
      		"weight": 2
      	},
      	{
      		"latitude": "40.679260229",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.841500185",
      		"weight": 2
      	},
      	{
      		"latitude": "40.82828654",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.907032114",
      		"weight": 2
      	},
      	{
      		"latitude": "40.840416643",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.819934163",
      		"weight": 1
      	},
      	{
      		"latitude": "40.832941761",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.935432593",
      		"weight": 2
      	},
      	{
      		"latitude": "40.639085221",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.979791315",
      		"weight": 3
      	},
      	{
      		"latitude": "40.617790709",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.95099968",
      		"weight": 2
      	},
      	{
      		"latitude": "40.665685931",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "REAR OF",
      		"longitude": "-73.898618514",
      		"weight": 3
      	},
      	{
      		"latitude": "40.863255822",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.920309255",
      		"weight": 2
      	},
      	{
      		"latitude": "40.752454247",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.887644142",
      		"weight": 2
      	},
      	{
      		"latitude": "40.656179569",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.951609408",
      		"weight": 2
      	},
      	{
      		"latitude": "40.822016943",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.93891535",
      		"weight": 2
      	},
      	{
      		"latitude": "40.674115539",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.816814146",
      		"weight": 3
      	},
      	{
      		"latitude": "40.729858438",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.954103203",
      		"weight": 3
      	},
      	{
      		"latitude": "40.65307377",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.889790059",
      		"weight": 2
      	},
      	{
      		"latitude": "40.608187539",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.769109463",
      		"weight": 3
      	},
      	{
      		"latitude": "40.710831552",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.016085232",
      		"weight": 1
      	},
      	{
      		"latitude": "40.737738772",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.866288599",
      		"weight": 1
      	},
      	{
      		"latitude": "40.697990988",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.78580964",
      		"weight": 2
      	},
      	{
      		"latitude": "40.728253665",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.999315931",
      		"weight": 3
      	},
      	{
      		"latitude": "40.841183585",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.879893816",
      		"weight": 2
      	},
      	{
      		"latitude": "40.851487774",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.935457967",
      		"weight": 2
      	},
      	{
      		"latitude": "40.861948368",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.927136388",
      		"weight": 2
      	},
      	{
      		"latitude": "40.707654096",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.005754399",
      		"weight": 3
      	},
      	{
      		"latitude": "40.695322335",
      		"law_cat_cd": "FELONY",
      		"longitude": "-73.79910349",
      		"weight": 3
      	},
      	{
      		"latitude": "40.636770368",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.002541582",
      		"weight": 1
      	},
      	{
      		"latitude": "40.622153897",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.027284856",
      		"weight": 2
      	},
      	{
      		"latitude": "40.672815569",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.894130285",
      		"weight": 2
      	},
      	{
      		"latitude": "40.762977758",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.976071669",
      		"weight": 2
      	},
      	{
      		"latitude": "40.721533469",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.739487754",
      		"weight": 2
      	},
      	{
      		"latitude": "40.759766726",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.966359149",
      		"weight": 3
      	},
      	{
      		"latitude": "40.582917019",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.955205017",
      		"weight": 3
      	},
      	{
      		"latitude": "40.705442274",
      		"law_cat_cd": "VIOLATION",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.807101632",
      		"weight": 1
      	},
      	{
      		"latitude": "40.862763361",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.901080165",
      		"weight": 2
      	},
      	{
      		"latitude": "40.822295411",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.953342128",
      		"weight": 3
      	},
      	{
      		"latitude": "40.671106911",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.881432957",
      		"weight": 2
      	},
      	{
      		"latitude": "40.841642767",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.94106581",
      		"weight": 2
      	},
      	{
      		"latitude": "40.692650993",
      		"law_cat_cd": "MISDEMEANOR",
      		"loc_of_occur_desc": "FRONT OF",
      		"longitude": "-73.84077599",
      		"weight": 2
      	},
        {
      		"latitude": "40.70059059",
      		"longitude": "-73.8077432",
      		"weight": 1
      	},
      	{
      		"latitude": "40.704855679",
      		"longitude": "-73.801112561",
      		"weight": 2
      	},
      	{
      		"latitude": "40.678562963",
      		"longitude": "-73.977428702",
      		"weight": 3
      	},
      	{
      		"latitude": "40.841499559",
      		"longitude": "-73.910461526",
      		"weight": 2
      	},
      	{
      		"latitude": "40.738855723",
      		"longitude": "-73.852656825",
      		"weight": 1
      	},
      	{
      		"latitude": "40.687418675",
      		"longitude": "-73.809551616",
      		"weight": 3
      	},
      	{
      		"latitude": "40.80707632",
      		"longitude": "-73.947847719",
      		"weight": 3
      	},
      	{
      		"latitude": "40.690413028",
      		"longitude": "-73.946770642",
      		"weight": 3
      	},
      	{
      		"latitude": "40.76046491",
      		"longitude": "-73.983732411",
      		"weight": 3
      	},
      	{
      		"latitude": "40.550629167",
      		"longitude": "-74.159654914",
      		"weight": 1
      	},
      	{
      		"latitude": "40.832436213",
      		"longitude": "-73.910068995",
      		"weight": 2
      	},
      	{
      		"latitude": "40.767536708",
      		"longitude": "-73.824080676",
      		"weight": 2
      	},
      	{
      		"latitude": "40.845230592",
      		"longitude": "-73.866119526",
      		"weight": 1
      	},
      	{
      		"latitude": "40.682951521",
      		"longitude": "-73.853602407",
      		"weight": 1
      	},
      	{
      		"latitude": "40.817399702",
      		"longitude": "-73.811524371",
      		"weight": 3
      	},
      	{
      		"latitude": "40.749810618",
      		"longitude": "-73.790937668",
      		"weight": 2
      	},
      	{
      		"latitude": "40.68327272",
      		"longitude": "-73.831575374",
      		"weight": 1
      	},
      	{
      		"latitude": "40.797576424",
      		"longitude": "-73.969785643",
      		"weight": 1
      	},
      	{
      		"latitude": "40.722397099",
      		"longitude": "-73.978535842",
      		"weight": 3
      	},
      	{
      		"latitude": "40.644225174",
      		"longitude": "-73.882086103",
      		"weight": 3
      	},
      	{
      		"latitude": "40.834349297",
      		"longitude": "-73.896966612",
      		"weight": 2
      	},
      	{
      		"latitude": "40.628175795",
      		"longitude": "-73.927867144",
      		"weight": 3
      	},
      	{
      		"latitude": "40.837752704",
      		"longitude": "-73.917383615",
      		"weight": 2
      	},
      	{
      		"latitude": "40.745124044",
      		"longitude": "-73.980661378",
      		"weight": 2
      	},
      	{
      		"latitude": "40.74943967",
      		"longitude": "-73.986925574",
      		"weight": 2
      	},
      	{
      		"latitude": "40.87494623",
      		"longitude": "-73.87994131",
      		"weight": 2
      	},
      	{
      		"latitude": "40.666949891",
      		"longitude": "-73.929908711",
      		"weight": 1
      	},
      	{
      		"latitude": "40.756860977",
      		"longitude": "-73.875656664",
      		"weight": 3
      	},
      	{
      		"latitude": "40.68187148",
      		"longitude": "-73.936325192",
      		"weight": 2
      	},
      	{
      		"latitude": "40.747494713",
      		"longitude": "-73.976402041",
      		"weight": 3
      	},
      	{
      		"latitude": "40.663563856",
      		"longitude": "-73.93160998",
      		"weight": 3
      	},
      	{
      		"latitude": "40.877263599",
      		"longitude": "-73.880757973",
      		"weight": 3
      	},
      	{
      		"latitude": "40.654084472",
      		"longitude": "-73.97474842",
      		"weight": 2
      	},
      	{
      		"latitude": "40.742841912",
      		"longitude": "-73.994710989",
      		"weight": 1
      	},
      	{
      		"latitude": "40.882391385",
      		"longitude": "-73.895648136",
      		"weight": 3
      	},
      	{
      		"latitude": "40.665074417",
      		"longitude": "-73.887427263",
      		"weight": 2
      	},
      	{
      		"latitude": "40.852141187",
      		"longitude": "-73.922375722",
      		"weight": 2
      	},
      	{
      		"latitude": "40.75012867",
      		"longitude": "-73.987531779",
      		"weight": 2
      	},
      	{
      		"latitude": "40.714060101",
      		"longitude": "-73.990200647",
      		"weight": 2
      	},
      	{
      		"latitude": "40.875871971",
      		"longitude": "-73.901006423",
      		"weight": 2
      	},
      	{
      		"latitude": "40.819982385",
      		"longitude": "-73.868887266",
      		"weight": 2
      	},
      	{
      		"latitude": "40.732861866",
      		"longitude": "-74.00752461",
      		"weight": 2
      	},
      	{
      		"latitude": "40.822568403",
      		"longitude": "-73.887543826",
      		"weight": 2
      	},
      	{
      		"latitude": "40.81950579",
      		"longitude": "-73.903214674",
      		"weight": 2
      	},
      	{
      		"latitude": "40.842006656",
      		"longitude": "-73.90959706",
      		"weight": 2
      	},
      	{
      		"latitude": "40.686884629",
      		"longitude": "-73.871882125",
      		"weight": 2
      	},
      	{
      		"latitude": "40.724792255",
      		"longitude": "-73.874042478",
      		"weight": 2
      	},
      	{
      		"latitude": "40.719722242",
      		"longitude": "-73.987147853",
      		"weight": 2
      	},
      	{
      		"latitude": "40.669703647",
      		"longitude": "-73.922508735",
      		"weight": 2
      	},
      	{
      		"latitude": "40.724473463",
      		"longitude": "-73.954705803",
      		"weight": 2
      	},
      	{
      		"latitude": "40.702759349",
      		"longitude": "-73.923112288",
      		"weight": 2
      	},
      	{
      		"latitude": "40.581966322",
      		"longitude": "-73.959943359",
      		"weight": 2
      	},
      	{
      		"latitude": "40.86184273",
      		"longitude": "-73.902950609",
      		"weight": 2
      	},
      	{
      		"latitude": "40.6813182",
      		"longitude": "-73.956508991",
      		"weight": 2
      	},
      	{
      		"latitude": "40.834069251",
      		"longitude": "-73.944881379",
      		"weight": 3
      	},
      	{
      		"latitude": "40.880040908",
      		"longitude": "-73.877827468",
      		"weight": 3
      	},
      	{
      		"latitude": "40.729793459",
      		"longitude": "-73.893310935",
      		"weight": 2
      	},
      	{
      		"latitude": "40.58262179",
      		"longitude": "-74.16225148",
      		"weight": 2
      	},
      	{
      		"latitude": "40.737472885",
      		"longitude": "-73.990229681",
      		"weight": 2
      	},
      	{
      		"latitude": "40.759411366",
      		"longitude": "-73.803173225",
      		"weight": 2
      	},
      	{
      		"latitude": "40.68773221",
      		"longitude": "-73.937491478",
      		"weight": 3
      	},
      	{
      		"latitude": "40.815055162",
      		"longitude": "-73.927422551",
      		"weight": 3
      	},
      	{
      		"latitude": "40.623863937",
      		"longitude": "-74.159214096",
      		"weight": 1
      	},
      	{
      		"latitude": "40.652762942",
      		"longitude": "-73.886283976",
      		"weight": 3
      	},
      	{
      		"latitude": "40.705787495",
      		"longitude": "-74.00838357",
      		"weight": 2
      	},
      	{
      		"latitude": "40.766025962",
      		"longitude": "-73.985243655",
      		"weight": 3
      	},
      	{
      		"latitude": "40.799645073",
      		"longitude": "-73.945104921",
      		"weight": 2
      	},
      	{
      		"latitude": "40.752130172",
      		"longitude": "-73.995370749",
      		"weight": 2
      	},
      	{
      		"latitude": "40.738179268",
      		"longitude": "-73.977603369",
      		"weight": 2
      	},
      	{
      		"latitude": "40.82935201",
      		"longitude": "-73.89188659",
      		"weight": 2
      	},
      	{
      		"latitude": "40.75559561",
      		"longitude": "-73.738105662",
      		"weight": 2
      	},
      	{
      		"latitude": "40.680922867",
      		"longitude": "-73.766892673",
      		"weight": 3
      	},
      	{
      		"latitude": "40.598537593",
      		"longitude": "-73.748559596",
      		"weight": 1
      	},
      	{
      		"latitude": "40.869224551",
      		"longitude": "-73.824928896",
      		"weight": 2
      	},
      	{
      		"latitude": "40.719549745",
      		"longitude": "-73.991761893",
      		"weight": 2
      	},
      	{
      		"latitude": "40.755653558",
      		"longitude": "-73.87590797",
      		"weight": 1
      	},
      	{
      		"latitude": "40.642696823",
      		"longitude": "-73.957636789",
      		"weight": 2
      	},
      	{
      		"latitude": "40.843230972",
      		"longitude": "-73.93917778",
      		"weight": 2
      	},
      	{
      		"latitude": "40.70685174",
      		"longitude": "-73.919028249",
      		"weight": 2
      	},
      	{
      		"latitude": "40.560042335",
      		"longitude": "-74.186201336",
      		"weight": 1
      	},
      	{
      		"latitude": "40.572885402",
      		"longitude": "-74.127916496",
      		"weight": 3
      	},
      	{
      		"latitude": "40.728873724",
      		"longitude": "-73.992291119",
      		"weight": 2
      	},
      	{
      		"latitude": "40.667785271",
      		"longitude": "-73.953482647",
      		"weight": 3
      	},
      	{
      		"latitude": "40.617017481",
      		"longitude": "-73.969114554",
      		"weight": 2
      	},
      	{
      		"latitude": "40.867307784",
      		"longitude": "-73.903376497",
      		"weight": 2
      	},
      	{
      		"latitude": "40.791999933",
      		"longitude": "-73.948747942",
      		"weight": 2
      	},
      	{
      		"latitude": "40.809628853",
      		"longitude": "-73.941975579",
      		"weight": 2
      	},
      	{
      		"latitude": "40.76606917",
      		"longitude": "-73.922068104",
      		"weight": 2
      	},
      	{
      		"latitude": "40.781538186",
      		"longitude": "-73.917637516",
      		"weight": 2
      	},
      	{
      		"latitude": "40.838424184",
      		"longitude": "-73.866530759",
      		"weight": 2
      	},
      	{
      		"latitude": "40.74943967",
      		"longitude": "-73.986925574",
      		"weight": 2
      	},
      	{
      		"latitude": "40.620696413",
      		"longitude": "-74.110015278",
      		"weight": 2
      	},
      	{
      		"latitude": "40.861948368",
      		"longitude": "-73.927136388",
      		"weight": 2
      	},
      	{
      		"latitude": "40.638627351",
      		"longitude": "-74.01706229",
      		"weight": 2
      	},
      	{
      		"latitude": "40.574513315",
      		"longitude": "-74.137221189",
      		"weight": 3
      	},
      	{
      		"latitude": "40.835094247",
      		"longitude": "-73.908048915",
      		"weight": 3
      	},
      	{
      		"latitude": "40.870600658",
      		"longitude": "-73.890246693",
      		"weight": 2
      	},
      	{
      		"latitude": "40.707152425",
      		"longitude": "-73.785477228",
      		"weight": 1
      	},
      	{
      		"latitude": "40.631909107",
      		"longitude": "-74.123328007",
      		"weight": 3
      	},
      	{
      		"latitude": "40.7624358",
      		"longitude": "-73.883775609",
      		"weight": 2
      	},
      	{
      		"latitude": "40.764704604",
      		"longitude": "-73.978092624",
      		"weight": 1
      	},
      	{
      		"latitude": "40.830889993",
      		"longitude": "-73.82728462",
      		"weight": 3
      	},
      	{
      		"latitude": "40.836587823",
      		"longitude": "-73.912148581",
      		"weight": 2
      	},
      	{
      		"latitude": "40.590383331",
      		"longitude": "-73.974678892",
      		"weight": 3
      	},
      	{
      		"latitude": "40.754005179",
      		"longitude": "-73.86479415",
      		"weight": 3
      	},
      	{
      		"latitude": "40.795642443",
      		"longitude": "-73.974113258",
      		"weight": 2
      	},
      	{
      		"latitude": "40.887565833",
      		"longitude": "-73.862294672",
      		"weight": 2
      	},
      	{
      		"latitude": "40.740160775",
      		"longitude": "-73.976574244",
      		"weight": 1
      	},
      	{
      		"latitude": "40.827925994",
      		"longitude": "-73.853261764",
      		"weight": 2
      	},
      	{
      		"latitude": "40.685808322",
      		"longitude": "-73.86673527",
      		"weight": 2
      	},
      	{
      		"latitude": "40.811407098",
      		"longitude": "-73.90776374",
      		"weight": 2
      	},
      	{
      		"latitude": "40.674749917",
      		"longitude": "-73.997769895",
      		"weight": 2
      	},
      	{
      		"latitude": "40.866669697",
      		"longitude": "-73.866304141",
      		"weight": 2
      	},
      	{
      		"latitude": "40.85214828",
      		"longitude": "-73.920698491",
      		"weight": 3
      	},
      	{
      		"latitude": "40.783628733",
      		"longitude": "-73.811666908",
      		"weight": 3
      	},
      	{
      		"latitude": "40.624236772",
      		"longitude": "-74.080755533",
      		"weight": 3
      	},
      	{
      		"latitude": "40.825562694",
      		"longitude": "-73.890187287",
      		"weight": 2
      	},
      	{
      		"latitude": "40.59950461",
      		"longitude": "-73.950375718",
      		"weight": 2
      	},
      	{
      		"latitude": "40.742929499",
      		"longitude": "-73.990795459",
      		"weight": 3
      	},
      	{
      		"latitude": "40.808916361",
      		"longitude": "-73.950281005",
      		"weight": 2
      	},
      	{
      		"latitude": "40.672047834",
      		"longitude": "-73.749374771",
      		"weight": 3
      	},
      	{
      		"latitude": "40.760936186",
      		"longitude": "-73.967044411",
      		"weight": 3
      	},
      	{
      		"latitude": "40.837323511",
      		"longitude": "-73.919830757",
      		"weight": 2
      	},
      	{
      		"latitude": "40.816754365",
      		"longitude": "-73.94818335",
      		"weight": 2
      	},
      	{
      		"latitude": "40.670399527",
      		"longitude": "-73.956624257",
      		"weight": 2
      	},
      	{
      		"latitude": "40.661858615",
      		"longitude": "-73.958907784",
      		"weight": 2
      	},
      	{
      		"latitude": "40.790007322",
      		"longitude": "-73.94889393",
      		"weight": 3
      	},
      	{
      		"latitude": "40.748223495",
      		"longitude": "-73.878458985",
      		"weight": 2
      	},
      	{
      		"latitude": "40.70244945",
      		"longitude": "-73.987162002",
      		"weight": 3
      	},
      	{
      		"latitude": "40.689697719",
      		"longitude": "-73.992364158",
      		"weight": 2
      	},
      	{
      		"latitude": "40.745252741",
      		"longitude": "-73.87006287",
      		"weight": 3
      	},
      	{
      		"latitude": "40.666003723",
      		"longitude": "-73.982331623",
      		"weight": 2
      	},
      	{
      		"latitude": "40.643292346",
      		"longitude": "-73.929479535",
      		"weight": 2
      	},
      	{
      		"latitude": "40.660481724",
      		"longitude": "-73.881296857",
      		"weight": 2
      	},
      	{
      		"latitude": "40.734776947",
      		"longitude": "-73.706390679",
      		"weight": 2
      	},
      	{
      		"latitude": "40.718658885",
      		"longitude": "-73.83770523",
      		"weight": 2
      	},
      	{
      		"latitude": "40.716507722",
      		"longitude": "-73.983919899",
      		"weight": 2
      	},
      	{
      		"latitude": "40.689498668",
      		"longitude": "-73.922071054",
      		"weight": 3
      	},
      	{
      		"latitude": "40.695257213",
      		"longitude": "-73.940484779",
      		"weight": 2
      	},
      	{
      		"latitude": "40.659058354",
      		"longitude": "-73.950457567",
      		"weight": 2
      	},
      	{
      		"latitude": "40.750400175",
      		"longitude": "-73.908198298",
      		"weight": 2
      	},
      	{
      		"latitude": "40.703432882",
      		"longitude": "-73.808615025",
      		"weight": 1
      	},
      	{
      		"latitude": "40.850219486",
      		"longitude": "-73.930337311",
      		"weight": 2
      	},
      	{
      		"latitude": "40.63556059",
      		"longitude": "-73.978023324",
      		"weight": 2
      	},
      	{
      		"latitude": "40.6403139",
      		"longitude": "-74.025195205",
      		"weight": 2
      	},
      	{
      		"latitude": "40.68680422",
      		"longitude": "-73.97158101",
      		"weight": 2
      	},
      	{
      		"latitude": "40.635953441",
      		"longitude": "-73.967833935",
      		"weight": 2
      	},
      	{
      		"latitude": "40.67415536",
      		"longitude": "-73.93061494",
      		"weight": 2
      	},
      	{
      		"latitude": "40.835851007",
      		"longitude": "-73.910545018",
      		"weight": 3
      	},
      	{
      		"latitude": "40.751553812",
      		"longitude": "-74.003589037",
      		"weight": 3
      	},
      	{
      		"latitude": "40.857744098",
      		"longitude": "-73.915927239",
      		"weight": 2
      	},
      	{
      		"latitude": "40.836954307",
      		"longitude": "-73.940105057",
      		"weight": 2
      	},
      	{
      		"latitude": "40.861855387",
      		"longitude": "-73.892459187",
      		"weight": 2
      	},
      	{
      		"latitude": "40.844323751",
      		"longitude": "-73.93991048",
      		"weight": 2
      	},
      	{
      		"latitude": "40.799030985",
      		"longitude": "-73.960260618",
      		"weight": 2
      	},
      	{
      		"latitude": "40.837133343",
      		"longitude": "-73.83416372",
      		"weight": 2
      	},
      	{
      		"latitude": "40.61178479",
      		"longitude": "-74.070677352",
      		"weight": 2
      	},
      	{
      		"latitude": "40.618097381",
      		"longitude": "-73.993096354",
      		"weight": 3
      	},
      	{
      		"latitude": "40.863275438",
      		"longitude": "-73.902919595",
      		"weight": 2
      	},
      	{
      		"latitude": "40.694325855",
      		"longitude": "-73.938805147",
      		"weight": 1
      	},
      	{
      		"latitude": "40.751560373",
      		"longitude": "-73.815846852",
      		"weight": 2
      	},
      	{
      		"latitude": "40.602951591",
      		"longitude": "-73.749976261",
      		"weight": 3
      	},
      	{
      		"latitude": "40.689061354",
      		"longitude": "-73.964999351",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857121691",
      		"longitude": "-73.890514753",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857467789",
      		"longitude": "-73.896757279",
      		"weight": 2
      	},
        {
      		"latitude": "40.689061354",
      		"longitude": "-73.964988351",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857121691",
      		"longitude": "-73.896544753",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857467789",
      		"longitude": "-73.896095679",
      		"weight": 2
      	},
        {
      		"latitude": "40.689046354",
      		"longitude": "-73.966788351",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857121651",
      		"longitude": "-73.896544767",
      		"weight": 2
      	},
      	{
      		"latitude": "40.857677789",
      		"longitude": "-73.867095679",
      		"weight": 2
      	},{
      		"latitude": "40.7416892",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-74.002985851",
      		"weight": 3
      	},
      	{
      		"latitude": "40.757240531",
      		"law_cat_cd": "MISDEMEANOR",
      		"longitude": "-73.989793637",
      		"weight": 2
      	},
      	{
      		"latitude": "40.827697536",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.876102433",
      		"weight": 3
      	},
      	{
      		"latitude": "40.622543771",
      		"law_cat_cd": "FELONY",
      		"loc_of_occur_desc": "INSIDE",
      		"longitude": "-73.963258311",
      		"weight": 3
      	}
      ];

        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB3_IcswYStSYbmrCGAtQikjtI1zmqu8QM&libraries=visualization,geometry")
            .done(function(script, textStatus){
              var myLatLng = new google.maps.LatLng(latitude, longitude);
              var map = new google.maps.Map(document.getElementById('googleMap'), {
                zoom: 10,
                center: myLatLng
              });
              $.each(data, function(i, e) {
                e.location = new google.maps.LatLng(e.latitude, e.longitude);
              });
              var marker = new google.maps.Marker({
                position: myLatLng,
                map: map
              });
              var heatmap = new google.maps.visualization.HeatmapLayer({
                data: data,
                dissipating: true,
                radius: 35,
                opacity: 0.67
              });
              heatmap.setMap(map);
              console.log(data);

              var styledMapType = new google.maps.StyledMapType(
                [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#1d2c4d"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#8ec3b9"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1a3646"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#4b6878"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#64779e"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#4b6878"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#334e87"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#023e58"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#283d6a"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#6f9ba5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1d2c4d"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#023e58"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#3C7680"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#304a7d"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#98a5be"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1d2c4d"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#2c6675"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#255763"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#b0d5ce"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#023e58"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#98a5be"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1d2c4d"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#283d6a"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#3a4762"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#0e1626"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#4e6d70"
                      }
                    ]
                  }
                ],
                {name: "styled_map"});

                map.mapTypes.set('styled_map',styledMapType);
                map.setMapTypeId('styled_map');

              });


  });

});
