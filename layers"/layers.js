ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2056").setExtent([2535286.676172, 1159162.267594, 2536543.115744, 1160118.590794]);
var wms_layers = [];

var lyr_SAT_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.images-swissimage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "SAT",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SAT_0, 0]);
var lyr_Topographic_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.pixelkarte-farbe",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Topographic",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Topographic_1, 0]);
var format_CAD_2 = new ol.format.GeoJSON();
var features_CAD_2 = format_CAD_2.readFeatures(json_CAD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_CAD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAD_2.addFeatures(features_CAD_2);
var lyr_CAD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAD_2, 
                style: style_CAD_2,
                interactive: true,
                title: '<img src="styles/legend/CAD_2.png" /> CAD'
            });
var format_LAMP_3 = new ol.format.GeoJSON();
var features_LAMP_3 = format_LAMP_3.readFeatures(json_LAMP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_LAMP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMP_3.addFeatures(features_LAMP_3);
var lyr_LAMP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAMP_3, 
                style: style_LAMP_3,
                interactive: true,
                title: '<img src="styles/legend/LAMP_3.png" /> LAMP'
            });
var group_VilledeCochise = new ol.layer.Group({
                                layers: [lyr_CAD_2,lyr_LAMP_3,],
                                title: "Ville de Cochise"});
var group_Maps = new ol.layer.Group({
                                layers: [lyr_SAT_0,lyr_Topographic_1,],
                                title: "Maps"});

lyr_SAT_0.setVisible(true);lyr_Topographic_1.setVisible(true);lyr_CAD_2.setVisible(true);lyr_LAMP_3.setVisible(true);
var layersList = [group_Maps,group_VilledeCochise];
lyr_CAD_2.set('fieldAliases', {'id': 'id', 'PAR': 'PAR', });
lyr_LAMP_3.set('fieldAliases', {'id': 'id', });
lyr_CAD_2.set('fieldImages', {'id': '', 'PAR': '', });
lyr_LAMP_3.set('fieldImages', {'id': '', });
lyr_CAD_2.set('fieldLabels', {});
lyr_LAMP_3.set('fieldLabels', {});
lyr_LAMP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});