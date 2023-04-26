export default function Goal({ hidden }) {
    return(
        <section id="goal" hidden={hidden}>
            <h2>Goal of the project</h2>
            <p>
                The primary goal of this project is to create a reliable and accurate prediction model for flooding 
                fractions in critical medical infrastructure locations in the Southeastern USA; Texas, Florida, Louisiana. The model will be 
                developed through the integration of a comprehensive database of explanatory variables and advanced 
                machine learning algorithms.
                <br /> <br />
                Flooding is a significant natural disaster that can have severe impacts on critical medical infrastructure 
                locations, including hospitals, clinics, and emergency response facilities. In the Southeastern USA, where 
                hurricanes and tropical storms are prevalent, flooding events are not uncommon and can pose a significant threat to the region.
            </p>
            {/* <button className="btn" role="button" onClick={onMapButtonClick}>Go to Map</button> */}
        </section>
    ); 
}