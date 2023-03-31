var res_table = ee.FeatureCollection("projects/gee-book/assets/A2-1/SW/reservoir_anoms_km3"),
    sm2003 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2003"),
    sm2004 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2004"),
    sm2005 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2005"),
    sm2006 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2006"),
    sm2007 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2007"),
    sm2008 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2008"),
    sm2009 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2009"),
    sm2010 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2010"),
    sm2011 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2011"),
    sm2012 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2012"),
    sm2013 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2013"),
    sm2014 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2014"),
    sm2015 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2015"),
    sm2016 = ee.Image("projects/gee-book/assets/A2-1/SM/sm2016"),
    swe2003 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2003"),
    swe2004 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2004"),
    swe2005 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2005"),
    swe2006 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2006"),
    swe2007 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2007"),
    swe2008 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2008"),
    swe2009 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2009"),
    swe2010 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2010"),
    swe2011 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2011"),
    swe2012 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2012"),
    swe2013 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2013"),
    swe2014 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2014"),
    swe2015 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2015"),
    swe2016 = ee.Image("projects/gee-book/assets/A2-1/SWE/swe2016"),
    nepal = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[82.41162841255495, 30.008478345460404],
          [82.36584843357845, 30.010346996731368],
          [82.32279631855188, 30.05025086825564],
          [82.28934398519917, 30.044966363091493],
          [82.25038931486041, 30.07533169925815],
          [82.21646046154322, 30.064181104319424],
          [82.17429404361901, 30.06965834368744],
          [82.17783970602942, 30.09369474955775],
          [82.18138717826834, 30.12010740682307],
          [82.20109582009113, 30.15090704783478],
          [82.18008165318362, 30.188759212320456],
          [82.14806950785056, 30.20047479628696],
          [82.13527617636049, 30.22168161398145],
          [82.09785753821865, 30.23649204108665],
          [82.11673759130996, 30.26318037366161],
          [82.12189488963459, 30.320705157880887],
          [82.10883823420325, 30.348580812821236],
          [82.06830405682646, 30.362229055265278],
          [82.0557888485453, 30.339908284225093],
          [82.01306421257529, 30.3448354427177],
          [81.99079606113331, 30.322677496905637],
          [81.95066979078035, 30.357384724162436],
          [81.90587748504977, 30.351623604833005],
          [81.85832946912954, 30.37665598785765],
          [81.73813745158239, 30.399107395523636],
          [81.71357212928652, 30.416546808420357],
          [81.6807594960909, 30.424505353347804],
          [81.62060577267714, 30.4475085792047],
          [81.61068628313633, 30.41638236043762],
          [81.5609484948094, 30.429063794886805],
          [81.55290392792767, 30.36936306035176],
          [81.48170470728945, 30.387835069064646],
          [81.44484001327436, 30.414580614323242],
          [81.40933827443712, 30.42118040905615],
          [81.4044855485838, 30.39931591528516],
          [81.42434899963432, 30.377450994451486],
          [81.39816346186812, 30.36926120756605],
          [81.39875594106823, 30.325527622947654],
          [81.42239635105061, 30.308993058881505],
          [81.40483643458666, 30.29008720903454],
          [81.41648531654535, 30.281758532412354],
          [81.39517692311155, 30.247337521887488],
          [81.3951388302206, 30.217636703252822],
          [81.35387440106366, 30.178391780582828],
          [81.25765520035273, 30.147342305551245],
          [81.28574696373518, 30.102647187066257],
          [81.27675456770709, 30.049636904004586],
          [81.4960194859068, 30.02766666717264],
          [80.44559659787937, 29.66421994412434],
          [80.28962646101505, 29.46301222509167],
          [80.23701053477174, 29.441406105828154],
          [80.3271894345738, 29.304953149881015],
          [80.27687810116088, 29.185212073826204],
          [80.1437564529543, 29.129766827813427],
          [80.05493730631952, 28.85338378967843],
          [80.16421694662525, 28.776212055673295],
          [80.27338516136061, 28.74709535591489],
          [80.35815876226214, 28.63010826861284],
          [80.45381677520088, 28.628747292340243],
          [80.52199809027807, 28.523637765292644],
          [80.56826975663817, 28.69339103649301],
          [80.83509568738141, 28.518708687438217],
          [81.1231504987356, 28.411025081904576],
          [81.3954036510709, 28.156287194544323],
          [81.66660592011097, 27.997854186401792],
          [82.11984817799566, 27.912449177016626],
          [82.42694787612815, 27.689689478541972],
          [82.71160070904006, 27.73851995017517],
          [82.77483987990036, 27.52492107442711],
          [82.92162542148287, 27.504634139526708],
          [83.02439193167342, 27.459873128045647],
          [83.19141047998832, 27.45299863988475],
          [83.27451770274601, 27.388758449173075],
          [83.2916553321667, 27.339132095805414],
          [83.38560830902433, 27.35387138784189],
          [83.39997341984036, 27.488103560119548],
          [83.63008874199403, 27.469871510910583],
          [83.80227547303174, 27.37820506030057],
          [83.85904743907771, 27.345617359187422],
          [83.88285629392325, 27.37220812022098],
          [83.8549380444575, 27.406235761522648],
          [83.83341938888438, 27.42690551440251],
          [83.84256997142931, 27.439068790375522],
          [83.89223435293877, 27.437215577447798],
          [83.93591168197582, 27.450662201453376],
          [83.94937820604561, 27.443384642381254],
          [83.97967025959427, 27.441278509296843],
          [84.00320739379437, 27.44486392950903],
          [84.02125018860659, 27.435039787210997],
          [84.05184405099865, 27.444029066708826],
          [84.06754068245358, 27.47869497219801],
          [84.09324810127595, 27.48932709550224],
          [84.09898946376919, 27.500511057416624],
          [84.09923840357659, 27.51656737467787],
          [84.109101495772, 27.521052611393785],
          [84.12330310377055, 27.5111169437721],
          [84.15123684778644, 27.517011544415883],
          [84.14759181798013, 27.50256151366077],
          [84.14944018814077, 27.488111477136542],
          [84.17510493140585, 27.476265309197967],
          [84.25318098680167, 27.453762890773536],
          [84.27355341070047, 27.422724385572774],
          [84.27824264638602, 27.396841016392656],
          [84.28704985948788, 27.391683834253783],
          [84.35681641153037, 27.374635809556644],
          [84.44373705013625, 27.369139191522933],
          [84.47243301498506, 27.355708265807863],
          [84.4771651481236, 27.36362542894463],
          [84.50219139629712, 27.354776812255047],
          [84.52858824127681, 27.352022039042645],
          [84.56605397242889, 27.348287136173845],
          [84.62057979637379, 27.339407631245958],
          [84.69563630434259, 27.218235144577132],
          [84.68275198302563, 27.112883284283033],
          [84.64792953484671, 27.056417272726968],
          [84.76129717050281, 27.00567455559801],
          [84.82756312961406, 27.026761876538878],
          [84.91578362736453, 26.97929072396416],
          [85.0012523794082, 26.913421428672486],
          [85.04270173581999, 26.847523764941734],
          [85.18050281244412, 26.865150402874285],
          [85.20124943860671, 26.76980978483558],
          [85.33178119005119, 26.747983427462586],
          [85.47749316522356, 26.80231689982211],
          [85.61639116922339, 26.877288723112944],
          [85.67843796402063, 26.846814657301096],
          [85.74035789477853, 26.75718064014038],
          [85.72320810747864, 26.682920342897877],
          [85.85160861401981, 26.57180803623914],
          [86.03802018010128, 26.678458887509972],
          [86.16150925497925, 26.611364430256096],
          [86.34807908859013, 26.620272063785013],
          [86.59044536255983, 26.51271922481101],
          [86.73071121685301, 26.426815785796503],
          [86.81598297414352, 26.449019608940983],
          [86.91026154789772, 26.475394810061516],
          [86.96064963479698, 26.53615049243665],
          [87.02483977769711, 26.55388861338107],
          [87.06709200023052, 26.61091329576143],
          [87.10203447187035, 26.444190494144166],
          [87.17252330900159, 26.396994685943493],
          [87.25946411447256, 26.403874053035025],
          [87.33990477256074, 26.348713780164964],
          [87.44758584177535, 26.43391602496715],
          [87.58669141051969, 26.391543970064017],
          [87.6846142638745, 26.43320288224824],
          [87.76057900820393, 26.41085500069833],
          [87.79262178208178, 26.47455037407138],
          [87.87962133829363, 26.459533901151104],
          [88.01552889253595, 26.357943415445526],
          [88.0734451955788, 26.427979094937783],
          [88.12868664875553, 26.483250474867408],
          [88.187166830214, 26.797737950752392],
          [88.13987768985787, 26.909798156447],
          [88.03100579365217, 27.02703740357072],
          [88.00706514764977, 27.146727056344872],
          [88.0565836925308, 27.357937096836075],
          [88.19408084206484, 27.792171270706202],
          [88.20117461735714, 27.854808629156793],
          [88.07637767817488, 27.893136186335166],
          [87.83624098848178, 27.938505076355256],
          [87.73543694344514, 27.806965740702363],
          [87.56881809747513, 27.854999911139547],
          [87.34719807249436, 27.83547579223464],
          [87.23090093947638, 27.818284851259616],
          [87.10907917089044, 27.864140832443862],
          [87.0369729640963, 27.94639563775484],
          [86.91809422527182, 27.992211193172746],
          [86.79226536044706, 28.006348095498318],
          [86.74875481780198, 28.10531992436613],
          [86.6446493613803, 28.066819317519254],
          [86.57350645152884, 28.100958202683266],
          [86.52295547939627, 27.96418217032001],
          [86.42858774236367, 27.909832766235002],
          [86.23087909265975, 27.99711003121316],
          [86.18164844705741, 28.1834350054632],
          [86.09986905579434, 28.100533674184593],
          [86.11718781685505, 27.92296340549434],
          [85.99726344828646, 27.92003444391091],
          [85.69738198743427, 28.386681789736635],
          [85.62123981163664, 28.259068666597397],
          [85.56681164216505, 28.320961388765713],
          [85.44891325561404, 28.33735868219697],
          [85.37348606874303, 28.270542236900692],
          [85.34403663733676, 28.297577147410248],
          [85.27063214325773, 28.290733089278927],
          [85.12028941277295, 28.339066522085826],
          [85.10045583771652, 28.45854775032663],
          [85.18942591400116, 28.53278643817146],
          [85.18508348264163, 28.635965934191553],
          [85.1199437581748, 28.683024245065752],
          [85.05478151039657, 28.672214330929336],
          [84.97001661915675, 28.58044577302777],
          [84.81236649291152, 28.58989434916632],
          [84.70294095469119, 28.636813686385192],
          [84.61535465412528, 28.731868349431387],
          [84.4619665797008, 28.782076772229498],
          [84.38671403569424, 28.85986503058489],
          [84.21794052695944, 28.899052508124242],
          [84.24939896970248, 29.036760381898652],
          [84.18448618697094, 29.049564895694328],
          [84.20143807858027, 29.101577156914804],
          [84.19642781836735, 29.23037003611347],
          [84.08555312988143, 29.30399715405621],
          [83.97672350036704, 29.321932457319704],
          [83.87886820728885, 29.315839838531275],
          [83.81551219960134, 29.306760013659154],
          [83.78514987198943, 29.240174521376233],
          [83.72462371057739, 29.245442460903778],
          [83.59273959933424, 29.183528911245503],
          [83.47348346506207, 29.282270280214707],
          [83.39793395604237, 29.433637934451777],
          [83.20235279812134, 29.58775738419213],
          [82.71993125338611, 29.789171980105692]]]),
    sm1_2020 = ee.Image("users/kraines5/SMImages/sm2020Jan"),
    sm2_2020 = ee.Image("users/kraines5/SMImages/sm2020Feb"),
    sm3_2020 = ee.Image("users/kraines5/SMImages/sm2020Mar"),
    sm4_2020 = ee.Image("users/kraines5/SMImages/sm2020Apr"),
    sm5_2020 = ee.Image("users/kraines5/SMImages/sm2020May"),
    sm6_2020 = ee.Image("users/kraines5/SMImages/sm2020Jun"),
    sm7_2020 = ee.Image("users/kraines5/SMImages/sm2020Jul"),
    sm8_2020 = ee.Image("users/kraines5/SMImages/sm2020Aug"),
    sm9_2020 = ee.Image("users/kraines5/SMImages/sm2020Sep"),
    sm10_2020 = ee.Image("users/kraines5/SMImages/sm2020Oct"),
    sm11_2020 = ee.Image("users/kraines5/SMImages/sm2020Nov"),
    sm12_2020 = ee.Image("users/kraines5/SMImages/sm2020Dec"),
    sm1_2021 = ee.Image("users/kraines5/SMImages/sm2021Jan"),
    sm2_2021 = ee.Image("users/kraines5/SMImages/sm2021Feb"),
    sm3_2021 = ee.Image("users/kraines5/SMImages/sm2021Mar"),
    sm4_2021 = ee.Image("users/kraines5/SMImages/sm2021Apr"),
    sm5_2021 = ee.Image("users/kraines5/SMImages/sm2021May"),
    sm6_2021 = ee.Image("users/kraines5/SMImages/sm2021Jun"),
    sm7_2021 = ee.Image("users/kraines5/SMImages/sm2021Jul"),
    sm8_2021 = ee.Image("users/kraines5/SMImages/sm2021Aug"),
    sm9_2021 = ee.Image("users/kraines5/SMImages/sm2021Sep"),
    sm10_2021 = ee.Image("users/kraines5/SMImages/sm2021Oct"),
    sm11_2021 = ee.Image("users/kraines5/SMImages/sm2021Nov"),
    sm12_2021 = ee.Image("users/kraines5/SMImages/sm2021Dec"),
    sm1_2022 = ee.Image("users/kraines5/SMImages/sm2022Jan"),
    sm2_2022 = ee.Image("users/kraines5/SMImages/sm2022Feb"),
    sm3_2022 = ee.Image("users/kraines5/SMImages/sm2022Mar"),
    sm4_2022 = ee.Image("users/kraines5/SMImages/sm2022Apr"),
    sm5_2022 = ee.Image("users/kraines5/SMImages/sm2022May"),
    sm6_2022 = ee.Image("users/kraines5/SMImages/sm2022Jun"),
    sm7_2022 = ee.Image("users/kraines5/SMImages/sm2022Jul"),
    sm8_2022 = ee.Image("users/kraines5/SMImages/sm2022Aug"),
    sm9_2022 = ee.Image("users/kraines5/SMImages/sm2022Sep"),
    sm10_2022 = ee.Image("users/kraines5/SMImages/sm2022Oct"),
    sm11_2022 = ee.Image("users/kraines5/SMImages/sm2022Nov"),
    sm12_2022 = ee.Image("users/kraines5/SMImages/sm2022Dec"),
    swe1_2020 = ee.Image("users/kraines5/SWEImages/swe2020Jan"),
    swe2_2020 = ee.Image("users/kraines5/SWEImages/swe2020Feb"),
    swe3_2020 = ee.Image("users/kraines5/SWEImages/swe2020Mar"),
    swe4_2020 = ee.Image("users/kraines5/SWEImages/swe2020Apr"),
    swe5_2020 = ee.Image("users/kraines5/SWEImages/swe2020May"),
    swe6_2020 = ee.Image("users/kraines5/SWEImages/swe2020Jun"),
    swe7_2020 = ee.Image("users/kraines5/SWEImages/swe2020Jul"),
    swe8_2020 = ee.Image("users/kraines5/SWEImages/swe2020Aug"),
    swe9_2020 = ee.Image("users/kraines5/SWEImages/swe2020Sep"),
    swe10_2020 = ee.Image("users/kraines5/SWEImages/swe2020Oct"),
    swe11_2020 = ee.Image("users/kraines5/SWEImages/swe2020Nov"),
    swe12_2020 = ee.Image("users/kraines5/SWEImages/swe2020Dec"),
    swe1_2021 = ee.Image("users/kraines5/SWEImages/swe2021Jan"),
    swe2_2021 = ee.Image("users/kraines5/SWEImages/swe2021Feb"),
    swe3_2021 = ee.Image("users/kraines5/SWEImages/swe2021Mar"),
    swe4_2021 = ee.Image("users/kraines5/SWEImages/swe2021Apr"),
    swe5_2021 = ee.Image("users/kraines5/SWEImages/swe2021May"),
    swe6_2021 = ee.Image("users/kraines5/SWEImages/swe2021Jun"),
    swe7_2021 = ee.Image("users/kraines5/SWEImages/swe2021Jul"),
    swe8_2021 = ee.Image("users/kraines5/SWEImages/swe2021Aug"),
    swe9_2021 = ee.Image("users/kraines5/SWEImages/swe2021Sep"),
    swe10_2021 = ee.Image("users/kraines5/SWEImages/swe2021Oct"),
    swe11_2021 = ee.Image("users/kraines5/SWEImages/swe2021Nov"),
    swe12_2021 = ee.Image("users/kraines5/SWEImages/swe2021Dec"),
    swe1_2022 = ee.Image("users/kraines5/SWEImages/swe2022Jan"),
    swe2_2022 = ee.Image("users/kraines5/SWEImages/swe2022Feb"),
    swe3_2022 = ee.Image("users/kraines5/SWEImages/swe2022Mar"),
    swe4_2022 = ee.Image("users/kraines5/SWEImages/swe2022Apr"),
    swe5_2022 = ee.Image("users/kraines5/SWEImages/swe2022May"),
    swe6_2022 = ee.Image("users/kraines5/SWEImages/swe2022Jun"),
    swe7_2022 = ee.Image("users/kraines5/SWEImages/swe2022Jul"),
    swe8_2022 = ee.Image("users/kraines5/SWEImages/swe2022Aug"),
    swe9_2022 = ee.Image("users/kraines5/SWEImages/swe2022Sep"),
    swe10_2022 = ee.Image("users/kraines5/SWEImages/swe2022Oct"),
    swe11_2022 = ee.Image("users/kraines5/SWEImages/swe2022Nov"),
    swe12_2022 = ee.Image("users/kraines5/SWEImages/swe2022Dec"),
    point = /* color: #d63000 */ee.Geometry.Point([84.256111, 27.675]),
    GRACE = ee.ImageCollection("NASA/GRACE/MASS_GRIDS/MASCON_CRI");

var basins = ee.FeatureCollection('USGS/WBD/2017/HUC04');

// Extract the 3 HUC 04 basins for the Central Valley.
var codes = ['1802', '1803', '1804'];
var basin = basins.filter(ee.Filter.inList('huc4', codes));

// Add the basin to the map to show the extent of our analysis.
Map.centerObject(basin, 6);
Map.addLayer(basin, {
    color: 'green'
}, 'Central Valley Basins', true, 0.5);

// This table was generated using the index from the CDEC website
var res = ee.FeatureCollection(
    'projects/gee-book/assets/A2-1/ca_reservoirs_index');
// Filter reservoir locations by the Central Valley geometry
var res_cv = res.filterBounds(basin);
Map.addLayer(res_cv, {
    'color': 'blue'
}, 'Reservoirs');

// Subset GRACE for liquid water equivalent dataset
var basinTWSa = GRACE.select('lwe_thickness');


// Apply the coordinates method to the Point object.
var pointCoordinates = point.coordinates();

// Print the result to the console.
print('point.coordinates(...) =', pointCoordinates);

// Display relevant geometries on the map.
Map.setCenter(84.256111, 27.675, 6);
Map.addLayer(point,
             {'color': 'black'},
             'Geometry [black]: point');


// Make plot of TWSa for Basin Boundary
var TWSaChart = ui.Chart.image.series({imageCollection: basinTWSa.filter(ee.Filter.date(
'2003-01-01', '2016-12-31')),
region: point,
reducer: ee.Reducer.mean(),
})
.setOptions({
    title: 'TWSa',
  hAxis: {
  format: 'MM-yyyy'
  },
  vAxis: {
  title: 'TWSa (cm)'
  },
  lineWidth: 1,
  });
print(TWSaChart);

// Set start and end years to annualize the data.
var yrStart = 2003;
var yrEnd = 2016;
var years = ee.List.sequence(yrStart, yrEnd);
var GRACE_yr = ee.ImageCollection.fromImages(years.map(function(y) {
    var date = ee.Date.fromYMD(y, 1, 1);
    return basinTWSa.filter(ee.Filter.calendarRange(y, y,
            'year'))
        .mean()
        .set('system:time_start', date)
        .rename('TWSa');
}).flatten());

// Make plot of annualized TWSa for Basin Boundary.
var TWSaChart = ui.Chart.image.series({
        imageCollection: GRACE_yr.filter(ee.Filter.date(
            '2003-01-01', '2016-12-31')),
        region: point,
        reducer: ee.Reducer.mean(),
        scale: 25000
    }).setChartType('ScatterChart')
    .setOptions({
        title: 'Total Annualized Water Storage anomalies',
        trendlines: {
            0: {
                color: 'CC0000'
            }
        },
        hAxis: {
            format: 'MM-yyyy'
        },
        vAxis: {
            title: 'TWSa (cm)'
        },
        lineWidth: 2,
        pointSize: 2
    });
print(TWSaChart);

// Compute Trend for each pixel to map regions of most change.

var addVariables = function(image) {
    // Compute time in fractional years.
    var date = ee.Date(image.get('system:time_start'));
    var years = date.difference(ee.Date('2003-01-01'), 'year');
    // Return the image with the added bands.
    return image
        // Add a time band.
        .addBands(ee.Image(years).rename('t').float())
        // Add a constant band.
        .addBands(ee.Image.constant(1));
};

var cvTWSa = GRACE_yr.filterBounds(point).map(addVariables);
print(cvTWSa);

// List of the independent variable names
var independents = ee.List(['constant', 't']);

// Name of the dependent variable.
var dependent = ee.String('TWSa');

// Compute a linear trend.  This will have two bands: 'residuals' and 
// a 2x1 band called coefficients (columns are for dependent variables).
var trend = cvTWSa.select(independents.add(dependent))
    .reduce(ee.Reducer.linearRegression(independents.length(), 1));

// Flatten the coefficients into a 2-band image.
var coefficients = trend.select('coefficients')
    .arrayProject([0])
    .arrayFlatten([independents]);

// Create a layer of the TWSa slope to add to the map.
var slope = coefficients.select('t');
// Set visualization parameters to represent positive (blue) 
// & negative (red) trends.
var slopeParams = {
    min: -3.5,
    max: 3.5,
    palette: ['red', 'white', 'blue']
};
Map.addLayer(slope.clip(point), slopeParams, 'TWSa Annualized Trend', true,
    0.75);

// -----------------------------------------------------------------------
// CHECKPOINT
// -----------------------------------------------------------------------
var gldas_sm_list = ee.List([sm1_2020,sm2_2020,sm3_2020,sm4_2020,sm5_2020,sm6_2020,
  sm7_2020,sm8_2020,sm9_2020,sm10_2020,sm11_2020, sm12_2020, sm1_2021, sm2_2021,
  sm3_2021,sm4_2021,sm5_2021,sm6_2021,sm7_2021,sm8_2021,sm9_2021,sm10_2021,sm11_2021,
  sm12_2021, sm1_2022,sm2_2022,sm3_2022,sm4_2022,sm5_2022,sm6_2022,sm7_2022,sm8_2022,
  sm9_2022,sm10_2022,sm11_2022,sm12_2022]);
var sm_ic = ee.ImageCollection.fromImages(gldas_sm_list);

var kgm2_to_cm = 0.10;
var sm_ic_ts = sm_ic.map(function(img) {
  var date = ee.Date.fromYMD(img.get('year'), img.get('month'), 1);
  return img.select('RootMoist_inst').multiply(kgm2_to_cm).rename(
    'SMa').set('system:time_start', date);
});




// Make plot of SWEa for Basin Boundary
var SMaChart = ui.Chart.image.series({
  imageCollection: sm_ic_ts.filter(ee.Filter.date('2020-01-01', '2023-12-31')),
  region: nepal,
  reducer: ee.Reducer.mean(),
  scale: 25000
  })
  .setChartType('ScatterChart')
  .setOptions({
  title: 'Soil Moisture anomalies',
  trendlines: {
  0: {
  color: 'CC0000'
  }
  },hAxis: {format: 'MM-yyyy'},
  vAxis: {title: 'SMa (cm)'},
  lineWidth: 2,
  pointSize: 2
  });
  print(SMaChart);

var gldas_swe_list = ee.List([swe1_2020,swe2_2020,swe3_2020,swe4_2020,swe5_2020,swe6_2020,
  swe7_2020,swe8_2020,swe9_2020,swe10_2020,swe11_2020, swe12_2020, swe1_2021, swe2_2021,
  swe3_2021,swe4_2021,swe5_2021,swe6_2021,swe7_2021,swe8_2021,swe9_2021,swe10_2021,swe11_2021,
  swe12_2021, swe1_2022,swe2_2022,swe3_2022,swe4_2022,swe5_2022,swe6_2022,swe7_2022,swe8_2022,
  swe9_2022,swe10_2022,swe11_2022,swe12_2022]);
var swe_ic = ee.ImageCollection.fromImages(gldas_swe_list);

var kgm2_to_cm = 0.10;
var swe_ic_ts = swe_ic.map(function(img) {
  var date = ee.Date.fromYMD(img.get('year'), img.get('month'), 1);
  return img.select('SWE_inst').multiply(kgm2_to_cm).rename(
    'SWEa').set('system:time_start', date);
});

// Make plot of SWEa for Basin Boundary
var SWEaChart = ui.Chart.image.series({
  imageCollection: swe_ic_ts.filter(ee.Filter.date('2020-01-01', '2023-12-31')),
  region: nepal,
  reducer: ee.Reducer.mean(),
  scale: 25000
  })
  .setChartType('ScatterChart')
  .setOptions({
  title: 'Snow Water Equivalent anomalies',
  trendlines: {
  0: {
  color: 'CC0000'
  }
  },hAxis: {format: 'MM-yyyy'},
  vAxis: {title: 'SWEa (cm)'},
  lineWidth: 2,
  pointSize: 2
  });
  print(SWEaChart);

// -----------------------------------------------------------------------
// CHECKPOINT
// -----------------------------------------------------------------------

// Extract geometry to convert time series of anomalies in km3 to cm
var area_km2 = basin.geometry().area().divide(1000 * 1000);
var km_2_cm = 100000;

// Convert csv to image collection
var res_list = res_table.toList(res_table.size());
var yrs = res_list.map(function(ft) {
    return ee.Date.fromYMD(ee.Feature(ft).get('YEAR'), 1, 1);
});
var SWanoms = res_list.map(function(ft) {
    return ee.Image.constant(ee.Feature(ft).get('Anom_km3'));
});
var sw_ic_ts = ee.ImageCollection.fromImages(
    res_list.map(
        function(ft) {
            var date = ee.Date.fromYMD(ee.Feature(ft).get('YEAR'),
                1, 1);
            return ee.Image.constant(ee.Feature(ft).get(
                'Anom_km3')).divide(area_km2).multiply(
                km_2_cm).rename('SWa').set(
                'system:time_start', date);
        }
    )
);

// Create a time series of Surface Water Anomalies
var SWaChart = ui.Chart.image.series({
        imageCollection: sw_ic_ts.filter(ee.Filter.date(
            '2003-01-01', '2016-12-31')),
        region: basin,
        reducer: ee.Reducer.mean(),
        scale: 25000
    })
    .setChartType('ScatterChart')
    .setOptions({
        title: 'Surface Water anomalies',
        trendlines: {
            0: {
                color: 'CC0000'
            }
        },
        hAxis: {
            format: 'MM-yyyy'
        },
        vAxis: {
            title: 'SWa (cm)'
        },
        lineWidth: 2,
        pointSize: 2
    });
print(SWaChart);

// -----------------------------------------------------------------------
// CHECKPOINT
// -----------------------------------------------------------------------

// Combine GLDAS & GRACE Data to compute change in human accessible water
var filter = ee.Filter.equals({
    leftField: 'system:time_start',
    rightField: 'system:time_start'
});
// Create the join.
var joindata = ee.Join.inner();
// Join GLDAS data
var firstJoin = ee.ImageCollection(joindata.apply(swe_ic_ts, sm_ic_ts,
    filter));
var join_1 = firstJoin.map(function(feature) {
    return ee.Image.cat(feature.get('primary'), feature.get(
        'secondary'));
});
print('Joined', join_1);


// Compute groundwater storage anomalies
var GWa = ee.ImageCollection(firstJoin.map(function(img) {
    var date = ee.Date.fromYMD(img.get('year'), 1, 1);
    return img.expression(
        'TWSa - SMa - SWEa', {
            'TWSa': img.select('TWSa'),
            'SMa': img.select('SMa'),
            'SWEa': img.select('SWEa')
        }).rename('GWa').copyProperties(img, [
        'system:time_start'
    ]);
}));
print('GWa', GWa);

// Chart Results
var GWaChart = ui.Chart.image.series({
        imageCollection: GWa,
        region: nepal,
        reducer: ee.Reducer.mean(),
        scale: 25000
    })
    .setChartType('ScatterChart')
    .setOptions({
        title: 'Changes in Groundwater Storage',
        trendlines: {
            0: {
                color: 'CC0000'
            }
        },
        hAxis: {
            format: 'MM-yyyy'
        },
        vAxis: {
            title: 'GWa (cm)'
        },
        lineWidth: 2,
        pointSize: 2
    });
print(GWaChart);

// Now look at the values from the start of 2012 to the end of 2016 drought.
// 2012 -3.874 cm --> 2016 -16.95 cm 
// This is a ~13 cm / 100000 (cm/km) * Area 155407 km2 = 
var loss_km3 = ee.Number(-3.874).subtract(-16.95).divide(km_2_cm)
    .multiply(area_km2);
print('During the 2012-2016 drought, CA lost ', loss_km3,
    'km3 in groundwater');
