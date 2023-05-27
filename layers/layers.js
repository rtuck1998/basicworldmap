var wms_layers = [];

var format_worldadministrativeboundaries_0 = new ol.format.GeoJSON();
var features_worldadministrativeboundaries_0 = format_worldadministrativeboundaries_0.readFeatures(json_worldadministrativeboundaries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldadministrativeboundaries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldadministrativeboundaries_0.addFeatures(features_worldadministrativeboundaries_0);
var lyr_worldadministrativeboundaries_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_worldadministrativeboundaries_0, 
                style: style_worldadministrativeboundaries_0,
                interactive: true,
    title: 'world-administrative-boundaries<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_0.png" /> ABW<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_1.png" /> AFG<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_2.png" /> AGO<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_3.png" /> AIA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_4.png" /> ALB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_5.png" /> AND<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_6.png" /> ARE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_7.png" /> ARG<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_8.png" /> ARM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_9.png" /> ASM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_10.png" /> ATG<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_11.png" /> AUS<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_12.png" /> AUT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_13.png" /> AZE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_14.png" /> BDI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_15.png" /> BEL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_16.png" /> BEN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_17.png" /> BFA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_18.png" /> BGD<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_19.png" /> BGR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_20.png" /> BHR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_21.png" /> BHS<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_22.png" /> BIH<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_23.png" /> BLR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_24.png" /> BLZ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_25.png" /> BMU<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_26.png" /> BOL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_27.png" /> BRA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_28.png" /> BRB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_29.png" /> BRN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_30.png" /> BTN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_31.png" /> BWA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_32.png" /> CAF<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_33.png" /> CAN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_34.png" /> CHE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_35.png" /> CHL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_36.png" /> CHN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_37.png" /> CIV<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_38.png" /> CMR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_39.png" /> COD<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_40.png" /> COG<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_41.png" /> COL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_42.png" /> COM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_43.png" /> CPV<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_44.png" /> CRI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_45.png" /> CUB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_46.png" /> CYP<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_47.png" /> CZE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_48.png" /> DEU<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_49.png" /> DJI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_50.png" /> DMA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_51.png" /> DNK<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_52.png" /> DOM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_53.png" /> DZA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_54.png" /> ECU<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_55.png" /> EGY<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_56.png" /> ERI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_57.png" /> ESH<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_58.png" /> ESP<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_59.png" /> EST<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_60.png" /> ETH<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_61.png" /> FIN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_62.png" /> FJI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_63.png" /> FRA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_64.png" /> FSM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_65.png" /> GAB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_66.png" /> GBR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_67.png" /> GEO<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_68.png" /> GHA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_69.png" /> GIN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_70.png" /> GMB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_71.png" /> GNB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_72.png" /> GNQ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_73.png" /> GRC<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_74.png" /> GRD<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_75.png" /> GTM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_76.png" /> GUM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_77.png" /> GUY<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_78.png" /> HND<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_79.png" /> HRV<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_80.png" /> HTI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_81.png" /> HUN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_82.png" /> IDN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_83.png" /> IND<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_84.png" /> IOT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_85.png" /> IRL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_86.png" /> IRN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_87.png" /> IRQ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_88.png" /> ISL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_89.png" /> ISR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_90.png" /> ITA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_91.png" /> JAM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_92.png" /> JOR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_93.png" /> JPN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_94.png" /> KAZ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_95.png" /> KEN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_96.png" /> KGZ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_97.png" /> KHM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_98.png" /> KIR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_99.png" /> KNA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_100.png" /> KOR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_101.png" /> KWT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_102.png" /> LAO<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_103.png" /> LBN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_104.png" /> LBR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_105.png" /> LBY<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_106.png" /> LCA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_107.png" /> LIE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_108.png" /> LKA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_109.png" /> LSO<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_110.png" /> LTU<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_111.png" /> LUX<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_112.png" /> LVA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_113.png" /> MAR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_114.png" /> MCO<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_115.png" /> MDA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_116.png" /> MDG<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_117.png" /> MDV<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_118.png" /> MEX<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_119.png" /> MHL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_120.png" /> MKD<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_121.png" /> MLI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_122.png" /> MLT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_123.png" /> MMR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_124.png" /> MNE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_125.png" /> MNG<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_126.png" /> MOZ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_127.png" /> MRT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_128.png" /> MUS<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_129.png" /> MWI<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_130.png" /> MYS<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_131.png" /> NAM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_132.png" /> NER<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_133.png" /> NGA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_134.png" /> NIC<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_135.png" /> NLD<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_136.png" /> NOR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_137.png" /> NPL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_138.png" /> NRU<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_139.png" /> NZL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_140.png" /> OMN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_141.png" /> PAK<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_142.png" /> PAN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_143.png" /> PER<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_144.png" /> PHL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_145.png" /> PLW<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_146.png" /> PNG<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_147.png" /> POL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_148.png" /> PRK<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_149.png" /> PRT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_150.png" /> PRY<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_151.png" /> QAT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_152.png" /> ROU<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_153.png" /> RUS<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_154.png" /> RWA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_155.png" /> SAU<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_156.png" /> SDN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_157.png" /> SEN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_158.png" /> SGP<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_159.png" /> SLB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_160.png" /> SLE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_161.png" /> SLV<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_162.png" /> SMR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_163.png" /> SOM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_164.png" /> SRB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_165.png" /> SSD<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_166.png" /> STP<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_167.png" /> SUR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_168.png" /> SVK<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_169.png" /> SVN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_170.png" /> SWE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_171.png" /> SWZ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_172.png" /> SYC<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_173.png" /> SYR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_174.png" /> TCD<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_175.png" /> TGO<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_176.png" /> THA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_177.png" /> TJK<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_178.png" /> TKL<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_179.png" /> TKM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_180.png" /> TLS<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_181.png" /> TON<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_182.png" /> TTO<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_183.png" /> TUN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_184.png" /> TUR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_185.png" /> TUV<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_186.png" /> TZA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_187.png" /> UGA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_188.png" /> UKR<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_189.png" /> URY<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_190.png" /> USA<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_191.png" /> UZB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_192.png" /> VAT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_193.png" /> VCT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_194.png" /> VEN<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_195.png" /> VNM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_196.png" /> VUT<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_197.png" /> WSM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_198.png" /> XXX<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_199.png" /> XXY<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_200.png" /> XXZ<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_201.png" /> YEM<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_202.png" /> ZAF<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_203.png" /> ZMB<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_204.png" /> ZWE<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_205.png" /> <br />'
        });
var format_World_Cities_1 = new ol.format.GeoJSON();
var features_World_Cities_1 = format_World_Cities_1.readFeatures(json_World_Cities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_World_Cities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_World_Cities_1.addFeatures(features_World_Cities_1);
var lyr_World_Cities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_World_Cities_1, 
                style: style_World_Cities_1,
                interactive: true,
    title: 'World_Cities<br />\
    <img src="styles/legend/World_Cities_1_0.png" /> 1,000,000 to 4,999,999<br />\
    <img src="styles/legend/World_Cities_1_1.png" /> 100,000 to 249,999<br />\
    <img src="styles/legend/World_Cities_1_2.png" /> 250,000 to 499,999<br />\
    <img src="styles/legend/World_Cities_1_3.png" /> 5,000,000 and greater<br />\
    <img src="styles/legend/World_Cities_1_4.png" /> 50,000 to 99,999<br />\
    <img src="styles/legend/World_Cities_1_5.png" /> 500,000 to 999,999<br />\
    <img src="styles/legend/World_Cities_1_6.png" /> Less than 50,000<br />\
    <img src="styles/legend/World_Cities_1_7.png" /> <br />'
        });

lyr_worldadministrativeboundaries_0.setVisible(true);lyr_World_Cities_1.setVisible(true);
var layersList = [lyr_worldadministrativeboundaries_0,lyr_World_Cities_1];
lyr_worldadministrativeboundaries_0.set('fieldAliases', {'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1_': 'iso_3166_1_', 'french_shor': 'french_shor', 'WPP2022_Demographic_Indicators_Medium_SortOrder': 'WPP2022_Demographic_Indicators_Medium_SortOrder', 'WPP2022_Demographic_Indicators_Medium_LocID': 'WPP2022_Demographic_Indicators_Medium_LocID', 'WPP2022_Demographic_Indicators_Medium_Notes': 'WPP2022_Demographic_Indicators_Medium_Notes', 'WPP2022_Demographic_Indicators_Medium_ISO3_code': 'WPP2022_Demographic_Indicators_Medium_ISO3_code', 'WPP2022_Demographic_Indicators_Medium_SDMX_code': 'WPP2022_Demographic_Indicators_Medium_SDMX_code', 'WPP2022_Demographic_Indicators_Medium_LocTypeID': 'WPP2022_Demographic_Indicators_Medium_LocTypeID', 'WPP2022_Demographic_Indicators_Medium_LocTypeName': 'WPP2022_Demographic_Indicators_Medium_LocTypeName', 'WPP2022_Demographic_Indicators_Medium_ParentID': 'WPP2022_Demographic_Indicators_Medium_ParentID', 'WPP2022_Demographic_Indicators_Medium_Location': 'WPP2022_Demographic_Indicators_Medium_Location', 'WPP2022_Demographic_Indicators_Medium_VarID': 'WPP2022_Demographic_Indicators_Medium_VarID', 'WPP2022_Demographic_Indicators_Medium_Variant': 'WPP2022_Demographic_Indicators_Medium_Variant', 'WPP2022_Demographic_Indicators_Medium_Time': 'WPP2022_Demographic_Indicators_Medium_Time', 'WPP2022_Demographic_Indicators_Medium_TPopulation1Jan': 'WPP2022_Demographic_Indicators_Medium_TPopulation1Jan', 'WPP2022_Demographic_Indicators_Medium_TPopulation1July': 'WPP2022_Demographic_Indicators_Medium_TPopulation1July', 'WPP2022_Demographic_Indicators_Medium_TPopulationMale1July': 'WPP2022_Demographic_Indicators_Medium_TPopulationMale1July', 'WPP2022_Demographic_Indicators_Medium_TPopulationFemale1July': 'WPP2022_Demographic_Indicators_Medium_TPopulationFemale1July', 'WPP2022_Demographic_Indicators_Medium_PopDensity': 'WPP2022_Demographic_Indicators_Medium_PopDensity', 'WPP2022_Demographic_Indicators_Medium_PopSexRatio': 'WPP2022_Demographic_Indicators_Medium_PopSexRatio', 'WPP2022_Demographic_Indicators_Medium_MedianAgePop': 'WPP2022_Demographic_Indicators_Medium_MedianAgePop', 'WPP2022_Demographic_Indicators_Medium_NatChange': 'WPP2022_Demographic_Indicators_Medium_NatChange', 'WPP2022_Demographic_Indicators_Medium_NatChangeRT': 'WPP2022_Demographic_Indicators_Medium_NatChangeRT', 'WPP2022_Demographic_Indicators_Medium_PopChange': 'WPP2022_Demographic_Indicators_Medium_PopChange', 'WPP2022_Demographic_Indicators_Medium_PopGrowthRate': 'WPP2022_Demographic_Indicators_Medium_PopGrowthRate', 'WPP2022_Demographic_Indicators_Medium_DoublingTime': 'WPP2022_Demographic_Indicators_Medium_DoublingTime', 'WPP2022_Demographic_Indicators_Medium_Births': 'WPP2022_Demographic_Indicators_Medium_Births', 'WPP2022_Demographic_Indicators_Medium_Births1519': 'WPP2022_Demographic_Indicators_Medium_Births1519', 'WPP2022_Demographic_Indicators_Medium_CBR': 'WPP2022_Demographic_Indicators_Medium_CBR', 'WPP2022_Demographic_Indicators_Medium_TFR': 'WPP2022_Demographic_Indicators_Medium_TFR', 'WPP2022_Demographic_Indicators_Medium_NRR': 'WPP2022_Demographic_Indicators_Medium_NRR', 'WPP2022_Demographic_Indicators_Medium_MAC': 'WPP2022_Demographic_Indicators_Medium_MAC', 'WPP2022_Demographic_Indicators_Medium_SRB': 'WPP2022_Demographic_Indicators_Medium_SRB', 'WPP2022_Demographic_Indicators_Medium_Deaths': 'WPP2022_Demographic_Indicators_Medium_Deaths', 'WPP2022_Demographic_Indicators_Medium_DeathsMale': 'WPP2022_Demographic_Indicators_Medium_DeathsMale', 'WPP2022_Demographic_Indicators_Medium_DeathsFemale': 'WPP2022_Demographic_Indicators_Medium_DeathsFemale', 'WPP2022_Demographic_Indicators_Medium_CDR': 'WPP2022_Demographic_Indicators_Medium_CDR', 'WPP2022_Demographic_Indicators_Medium_LEx': 'WPP2022_Demographic_Indicators_Medium_LEx', 'WPP2022_Demographic_Indicators_Medium_LExMale': 'WPP2022_Demographic_Indicators_Medium_LExMale', 'WPP2022_Demographic_Indicators_Medium_LExFemale': 'WPP2022_Demographic_Indicators_Medium_LExFemale', 'WPP2022_Demographic_Indicators_Medium_LE15': 'WPP2022_Demographic_Indicators_Medium_LE15', 'WPP2022_Demographic_Indicators_Medium_LE15Male': 'WPP2022_Demographic_Indicators_Medium_LE15Male', 'WPP2022_Demographic_Indicators_Medium_LE15Female': 'WPP2022_Demographic_Indicators_Medium_LE15Female', 'WPP2022_Demographic_Indicators_Medium_LE65': 'WPP2022_Demographic_Indicators_Medium_LE65', 'WPP2022_Demographic_Indicators_Medium_LE65Male': 'WPP2022_Demographic_Indicators_Medium_LE65Male', 'WPP2022_Demographic_Indicators_Medium_LE65Female': 'WPP2022_Demographic_Indicators_Medium_LE65Female', 'WPP2022_Demographic_Indicators_Medium_LE80': 'WPP2022_Demographic_Indicators_Medium_LE80', 'WPP2022_Demographic_Indicators_Medium_LE80Male': 'WPP2022_Demographic_Indicators_Medium_LE80Male', 'WPP2022_Demographic_Indicators_Medium_LE80Female': 'WPP2022_Demographic_Indicators_Medium_LE80Female', 'WPP2022_Demographic_Indicators_Medium_InfantDeaths': 'WPP2022_Demographic_Indicators_Medium_InfantDeaths', 'WPP2022_Demographic_Indicators_Medium_IMR': 'WPP2022_Demographic_Indicators_Medium_IMR', 'WPP2022_Demographic_Indicators_Medium_LBsurvivingAge1': 'WPP2022_Demographic_Indicators_Medium_LBsurvivingAge1', 'WPP2022_Demographic_Indicators_Medium_Under5Deaths': 'WPP2022_Demographic_Indicators_Medium_Under5Deaths', 'WPP2022_Demographic_Indicators_Medium_Q5': 'WPP2022_Demographic_Indicators_Medium_Q5', 'WPP2022_Demographic_Indicators_Medium_Q0040': 'WPP2022_Demographic_Indicators_Medium_Q0040', 'WPP2022_Demographic_Indicators_Medium_Q0040Male': 'WPP2022_Demographic_Indicators_Medium_Q0040Male', 'WPP2022_Demographic_Indicators_Medium_Q0040Female': 'WPP2022_Demographic_Indicators_Medium_Q0040Female', 'WPP2022_Demographic_Indicators_Medium_Q0060': 'WPP2022_Demographic_Indicators_Medium_Q0060', 'WPP2022_Demographic_Indicators_Medium_Q0060Male': 'WPP2022_Demographic_Indicators_Medium_Q0060Male', 'WPP2022_Demographic_Indicators_Medium_Q0060Female': 'WPP2022_Demographic_Indicators_Medium_Q0060Female', 'WPP2022_Demographic_Indicators_Medium_Q1550': 'WPP2022_Demographic_Indicators_Medium_Q1550', 'WPP2022_Demographic_Indicators_Medium_Q1550Male': 'WPP2022_Demographic_Indicators_Medium_Q1550Male', 'WPP2022_Demographic_Indicators_Medium_Q1550Female': 'WPP2022_Demographic_Indicators_Medium_Q1550Female', 'WPP2022_Demographic_Indicators_Medium_Q1560': 'WPP2022_Demographic_Indicators_Medium_Q1560', 'WPP2022_Demographic_Indicators_Medium_Q1560Male': 'WPP2022_Demographic_Indicators_Medium_Q1560Male', 'WPP2022_Demographic_Indicators_Medium_Q1560Female': 'WPP2022_Demographic_Indicators_Medium_Q1560Female', 'WPP2022_Demographic_Indicators_Medium_NetMigrations': 'WPP2022_Demographic_Indicators_Medium_NetMigrations', 'WPP2022_Demographic_Indicators_Medium_CNMR': 'WPP2022_Demographic_Indicators_Medium_CNMR', });
lyr_World_Cities_1.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'CITY_NAME': 'CITY_NAME', 'GMI_ADMIN': 'GMI_ADMIN', 'ADMIN_NAME': 'ADMIN_NAME', 'FIPS_CNTRY': 'FIPS_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'STATUS': 'STATUS', 'POP': 'POP', 'POP_RANK': 'POP_RANK', 'POP_CLASS': 'POP_CLASS', 'PORT_ID': 'PORT_ID', 'LABEL_FLAG': 'LABEL_FLAG', 'POP_SOURCE': 'POP_SOURCE', });
lyr_worldadministrativeboundaries_0.set('fieldImages', {'iso3': 'TextEdit', 'status': 'TextEdit', 'color_code': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'iso_3166_1_': 'TextEdit', 'french_shor': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_SortOrder': 'Range', 'WPP2022_Demographic_Indicators_Medium_LocID': 'Range', 'WPP2022_Demographic_Indicators_Medium_Notes': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_ISO3_code': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_SDMX_code': 'Range', 'WPP2022_Demographic_Indicators_Medium_LocTypeID': 'Range', 'WPP2022_Demographic_Indicators_Medium_LocTypeName': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_ParentID': 'Range', 'WPP2022_Demographic_Indicators_Medium_Location': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_VarID': 'Range', 'WPP2022_Demographic_Indicators_Medium_Variant': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Time': 'Range', 'WPP2022_Demographic_Indicators_Medium_TPopulation1Jan': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_TPopulation1July': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_TPopulationMale1July': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_TPopulationFemale1July': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_PopDensity': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_PopSexRatio': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_MedianAgePop': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_NatChange': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_NatChangeRT': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_PopChange': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_PopGrowthRate': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_DoublingTime': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Births': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Births1519': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_CBR': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_TFR': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_NRR': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_MAC': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_SRB': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Deaths': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_DeathsMale': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_DeathsFemale': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_CDR': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LEx': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LExMale': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LExFemale': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE15': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE15Male': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE15Female': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE65': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE65Male': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE65Female': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE80': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE80Male': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LE80Female': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_InfantDeaths': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_IMR': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_LBsurvivingAge1': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Under5Deaths': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q5': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q0040': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q0040Male': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q0040Female': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q0060': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q0060Male': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q0060Female': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q1550': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q1550Male': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q1550Female': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q1560': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q1560Male': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_Q1560Female': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_NetMigrations': 'TextEdit', 'WPP2022_Demographic_Indicators_Medium_CNMR': 'TextEdit', });
lyr_World_Cities_1.set('fieldImages', {'FID': 'Range', 'OBJECTID': 'Range', 'CITY_NAME': 'TextEdit', 'GMI_ADMIN': 'TextEdit', 'ADMIN_NAME': 'TextEdit', 'FIPS_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'STATUS': 'TextEdit', 'POP': 'Range', 'POP_RANK': 'Range', 'POP_CLASS': 'TextEdit', 'PORT_ID': 'Range', 'LABEL_FLAG': 'Range', 'POP_SOURCE': 'TextEdit', });
lyr_worldadministrativeboundaries_0.set('fieldLabels', {'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'name': 'inline label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_': 'no label', 'french_shor': 'inline label', 'WPP2022_Demographic_Indicators_Medium_SortOrder': 'no label', 'WPP2022_Demographic_Indicators_Medium_LocID': 'no label', 'WPP2022_Demographic_Indicators_Medium_Notes': 'no label', 'WPP2022_Demographic_Indicators_Medium_ISO3_code': 'no label', 'WPP2022_Demographic_Indicators_Medium_SDMX_code': 'no label', 'WPP2022_Demographic_Indicators_Medium_LocTypeID': 'no label', 'WPP2022_Demographic_Indicators_Medium_LocTypeName': 'no label', 'WPP2022_Demographic_Indicators_Medium_ParentID': 'no label', 'WPP2022_Demographic_Indicators_Medium_Location': 'no label', 'WPP2022_Demographic_Indicators_Medium_VarID': 'no label', 'WPP2022_Demographic_Indicators_Medium_Variant': 'no label', 'WPP2022_Demographic_Indicators_Medium_Time': 'no label', 'WPP2022_Demographic_Indicators_Medium_TPopulation1Jan': 'no label', 'WPP2022_Demographic_Indicators_Medium_TPopulation1July': 'no label', 'WPP2022_Demographic_Indicators_Medium_TPopulationMale1July': 'no label', 'WPP2022_Demographic_Indicators_Medium_TPopulationFemale1July': 'no label', 'WPP2022_Demographic_Indicators_Medium_PopDensity': 'no label', 'WPP2022_Demographic_Indicators_Medium_PopSexRatio': 'no label', 'WPP2022_Demographic_Indicators_Medium_MedianAgePop': 'no label', 'WPP2022_Demographic_Indicators_Medium_NatChange': 'no label', 'WPP2022_Demographic_Indicators_Medium_NatChangeRT': 'no label', 'WPP2022_Demographic_Indicators_Medium_PopChange': 'no label', 'WPP2022_Demographic_Indicators_Medium_PopGrowthRate': 'no label', 'WPP2022_Demographic_Indicators_Medium_DoublingTime': 'no label', 'WPP2022_Demographic_Indicators_Medium_Births': 'no label', 'WPP2022_Demographic_Indicators_Medium_Births1519': 'no label', 'WPP2022_Demographic_Indicators_Medium_CBR': 'no label', 'WPP2022_Demographic_Indicators_Medium_TFR': 'no label', 'WPP2022_Demographic_Indicators_Medium_NRR': 'no label', 'WPP2022_Demographic_Indicators_Medium_MAC': 'no label', 'WPP2022_Demographic_Indicators_Medium_SRB': 'no label', 'WPP2022_Demographic_Indicators_Medium_Deaths': 'no label', 'WPP2022_Demographic_Indicators_Medium_DeathsMale': 'no label', 'WPP2022_Demographic_Indicators_Medium_DeathsFemale': 'no label', 'WPP2022_Demographic_Indicators_Medium_CDR': 'no label', 'WPP2022_Demographic_Indicators_Medium_LEx': 'no label', 'WPP2022_Demographic_Indicators_Medium_LExMale': 'no label', 'WPP2022_Demographic_Indicators_Medium_LExFemale': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE15': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE15Male': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE15Female': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE65': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE65Male': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE65Female': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE80': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE80Male': 'no label', 'WPP2022_Demographic_Indicators_Medium_LE80Female': 'no label', 'WPP2022_Demographic_Indicators_Medium_InfantDeaths': 'no label', 'WPP2022_Demographic_Indicators_Medium_IMR': 'no label', 'WPP2022_Demographic_Indicators_Medium_LBsurvivingAge1': 'no label', 'WPP2022_Demographic_Indicators_Medium_Under5Deaths': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q5': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q0040': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q0040Male': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q0040Female': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q0060': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q0060Male': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q0060Female': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q1550': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q1550Male': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q1550Female': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q1560': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q1560Male': 'no label', 'WPP2022_Demographic_Indicators_Medium_Q1560Female': 'no label', 'WPP2022_Demographic_Indicators_Medium_NetMigrations': 'no label', 'WPP2022_Demographic_Indicators_Medium_CNMR': 'no label', });
lyr_World_Cities_1.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'CITY_NAME': 'inline label', 'GMI_ADMIN': 'no label', 'ADMIN_NAME': 'no label', 'FIPS_CNTRY': 'no label', 'CNTRY_NAME': 'no label', 'STATUS': 'no label', 'POP': 'inline label', 'POP_RANK': 'no label', 'POP_CLASS': 'no label', 'PORT_ID': 'no label', 'LABEL_FLAG': 'no label', 'POP_SOURCE': 'no label', });
lyr_World_Cities_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});