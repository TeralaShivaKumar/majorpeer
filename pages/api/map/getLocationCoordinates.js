const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.pk.eyJ1Ijoic2hpdmFrdW1hcjEwMCIsImEiOiJjbDd3NXlmZW8waWhkM3htdmo1bGU3YjZ1In0.WHT-Jy9DUQzqDV77FO0Ypg}`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
