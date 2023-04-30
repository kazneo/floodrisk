import React, { useState, useEffect } from "react";
// import '../assets/datasets.json'

export default function Dataset({ hidden }){
    const [dataset, setDataset] = useState([]);
    return(
        <section id="data" hidden={hidden}>
            <h3>Datasets</h3>
            <ul>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/maps/hospitals">Hospitals Locations Data</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/maps/nursing-homes">Nursing Homes Locations Data</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/maps/urgent-care-facilities">Urgent Care Facilities Locations Data</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/datasets/veterans-health-administration-medical-facilities-1">Veterans Health Administration Medical Facilities Locations Data</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/maps/dialysis-centers">Dialysis Centers</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/datasets/geoplatform::base-flood-elevations/">Base Flood Elevations</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://www.gpsvisualizer.com/elevation">GPS visualizer elevation data</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://waterdata.usgs.gov/nwis/sw">USGS Surface-Water Data for the Nation</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://earth.gsfc.nasa.gov/hydro/data/nasa-usda-global-soilmoisture-data">NASA-USDA global soil moisture data</a> - Provided by National Aeronautics and Space Administration (NASA)</li>
                <li><a href="https://earthquake.usgs.gov/earthquakes/search/">Earthquake hazards program</a> - Provided by United States Geological Survey (USGS)</li>
                <li><a href="https://disc.gsfc.nasa.gov/datasets/NCALDAS_NOAH0125_D_2.0/summary">NCA-LDAS Noah-3.3 Land Surface Model L4 Daily 0.125 x 0.125 degree V2.0</a> - Provided by National Aeronautics and Space Administration (NASA)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/datasets/geoplatform::coastal-gages/about">Coastal Gages</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/datasets/geoplatform::100-year-flood-zones/about">100 Year Flood Zones</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://hifld-geoplatform.opendata.arcgis.com/datasets/geoplatform::flood-hazard-zones/about">Flood Hazard Zones</a> - Provided by Homeland Infrastructure Foundation-Level Data (HIFLD)</li>
                <li><a href="https://covid19.census.gov/datasets/USCensus::average-household-size-and-population-density-county/about">Average Household Size and Population Density - County</a> - Provided by US Census Bureau</li>
                <li><a href="https://www.census.gov/data/tables/time-series/demo/popest/2020s-counties-detail.html">County Population by Characteristics: 2020-2021</a> - Provided by Provided by US Census Bureau</li>
                <li><a href="https://www.ers.usda.gov/data-products/county-level-data-sets/county-level-data-sets-download-data/">Poverty estimates for the U.S., States, and counties</a> - Provided by USDA</li>
                <li><a href="https://www.ers.usda.gov/data-products/county-level-data-sets/county-level-data-sets-download-data/">Unemployment and median household income for the U.S., States, and counties</a> - Provided by USDA</li>
                <li><a href="https://disc.gsfc.nasa.gov/datasets/AIRX3STD_006/summary">AIRS/Aqua L3 Daily Standard Physical Retrieval (AIRS+AMSU) 1 degree x 1 degree V006 (AIRX3STD)</a> - Provided by National Aeronautics and Space Administration (NASA)</li>
            </ul>
        </section>
    );
}
