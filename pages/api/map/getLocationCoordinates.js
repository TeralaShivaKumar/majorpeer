const getLocationCoordinates = async (req, res) => {
 // let MAPBOX_PLACES_API_URL="mapbox://styles/shivakumar100/cl7w7b8ap000l15qug7030l3k"
  //let ok="pk.eyJ1Ijoic2hpdmFrdW1hcjEwMCIsImEiOiJjbDd3NXlmZW8waWhkM3htdmo1bGU3YjZ1In0.WHT-Jy9DUQzqDV77FO0Ypg"
  const mapboxUrl = "mapbox://styles/shivakumar100/cl7w7b8ap000l15qug7030l3k"

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
