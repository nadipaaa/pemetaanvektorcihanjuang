var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Waypoints_1 = new ol.format.GeoJSON();
var features_Waypoints_1 = format_Waypoints_1.readFeatures(json_Waypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_1.addFeatures(features_Waypoints_1);
var lyr_Waypoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_1, 
                style: style_Waypoints_1,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints_1.png" /> Waypoints'
            });
var format_kelurahancihanjuang_2 = new ol.format.GeoJSON();
var features_kelurahancihanjuang_2 = format_kelurahancihanjuang_2.readFeatures(json_kelurahancihanjuang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahancihanjuang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelurahancihanjuang_2.addFeatures(features_kelurahancihanjuang_2);
var lyr_kelurahancihanjuang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelurahancihanjuang_2, 
                style: style_kelurahancihanjuang_2,
                popuplayertitle: "kelurahan cihanjuang",
                interactive: true,
                title: '<img src="styles/legend/kelurahancihanjuang_2.png" /> kelurahan cihanjuang'
            });
var format_bufferingtitikjentik_3 = new ol.format.GeoJSON();
var features_bufferingtitikjentik_3 = format_bufferingtitikjentik_3.readFeatures(json_bufferingtitikjentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferingtitikjentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferingtitikjentik_3.addFeatures(features_bufferingtitikjentik_3);
var lyr_bufferingtitikjentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufferingtitikjentik_3, 
                style: style_bufferingtitikjentik_3,
                popuplayertitle: "buffering titik jentik",
                interactive: true,
                title: '<img src="styles/legend/bufferingtitikjentik_3.png" /> buffering titik jentik'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_Waypoints_1.setVisible(true);lyr_kelurahancihanjuang_2.setVisible(true);lyr_bufferingtitikjentik_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Waypoints_1,lyr_kelurahancihanjuang_2,lyr_bufferingtitikjentik_3];
lyr_Waypoints_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kelurahancihanjuang_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_bufferingtitikjentik_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_kelurahancihanjuang_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_bufferingtitikjentik_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Waypoints_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_kelurahancihanjuang_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_bufferingtitikjentik_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_bufferingtitikjentik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});