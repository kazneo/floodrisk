import React, { useCallback } from "react";
export default function Goal({ hidden, viewSelector }) {

    const selectMapView = useCallback(() => {
        viewSelector('map');
    });

    return(
        <section id="goal" hidden={hidden}>
            <h2>Goal of the project</h2>
            <p>
                The primary objective of the project is to develop a dependable and precise prediction model for flooding fractions 
                in vital medical infrastructure locations in the southeastern United States, particularly in Texas, Florida, Mississippi, 
                and Louisiana. To achieve this objective, the project will integrate a comprehensive database of explanatory variables and 
                advanced machine learning algorithms.
                <br /> <br />
                Flooding is a major natural disaster that can have devastating consequences on critical medical infrastructure locations, 
                such as hospitals, clinics, and emergency response facilities. These infrastructures must be operational and accessible 
                during times of natural disasters to provide essential medical services to people in need. However, flooding events can 
                cause significant disruptions, rendering these facilities inaccessible and, as a result, putting people's lives at risk.
                <br /> <br />
                In the southeastern USA, where hurricanes and tropical storms are prevalent, flooding events are not uncommon. 
                These events can lead to catastrophic consequences, including loss of life, damage to property, and significant economic costs. 
                Therefore, developing an accurate and reliable prediction model for flooding in medical infrastructure locations in this region 
                is critical to enable effective planning, preparedness, and response during natural disasters. By integrating a comprehensive 
                database of explanatory variables and advanced machine learning algorithms, the project aims to create a reliable prediction 
                model that will help mitigate the effects of flooding on medical infrastructure locations in the Southeastern USA.
            </p>

            <button className="btn" role="button" onClick={selectMapView}>Go to Map</button>
        </section>
    ); 
}