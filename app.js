mapboxgl.accessToken = 'pk.eyJ1IjoiaGVybmFucGwiLCJhIjoiY2xod25zaHFyMDQ2cDNlbjV3NDhwemdveSJ9.qYTU7juH-Txq5hIto76FWA';
// Initialize the map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [96, 37.8],
  zoom: 2
});

// Add a title to the map
map.setStyle('mapbox://styles/mapbox/streets-v11-bright', {
  "title": "Short Story Locations"
});

// Add a legend to the map
var legend = new mapboxgl.Legend({
  container: 'legend',
  items: [
    {
      // The icon for the legend item
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Book_icon.svg/1200px-Book_icon.svg.png',
      // The text for the legend item
      text: 'Short Story Location'
    }
  ]
});

// Add the icons to the map
var icons = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    link: 'https://www.gutenberg.org/files/4727/4727-h/4727-h.htm',
    description: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.',
    latlng: [-74.0064, 40.7484]
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    link: 'https://www.gutenberg.org/files/268/268-h/268-h.htm',
    description: 'To Kill a Mockingbird is a novel by American author Harper Lee published in 1960. It was instantly successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee observations of...',
    latlng: [-87.6231, 35.4406]
  },
  {
    id: '3',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    link: 'https://www.gutenberg.org/files/580/580-h/580-h.htm',
    description: 'The Catcher in the Rye is a 1951 novel by J. D. Salinger. Originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. The novel has been translated widely. The protagonist Holden Caulfield has become an icon for teenage rebellion.',
    latlng: [-73.9869, 40.7514]
  },
  {
    id: '4',
    title: 'The Color Purple',
    author: 'Alice Walker',
    link: 'https://www.gutenberg.org/files/4365/4365-h/4365-h.htm',
    description: 'The Color Purple is a 1982 epistolary novel by American author Alice Walker that won the 1983 Pulitzer Prize for Fiction and the National Book Award for Fiction. It was later adapted into a film and a musical of the same name. The novel is written as a series of letters from African-American women in the southern United States in the earl.'
  },
];

// Add the icons to the map
for (var i = 0; i < icons.length; i++) {
  var icon = new mapboxgl.Marker({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Book_icon.svg/1200px-Book_icon.svg.png',
    iconSize: [50, 50],
    anchor: [25, 50]
  });
  icon.addTo(map);
}

// Add an event listener to the map
map.on('click', function(e) {
  // Get the clicked icon
  var icon = e.target;

  // If the icon is not null
  if (icon) {
    // Get the icon's id
    var id = icon.get('id');

    // Get the icon's data
    var data = icons[id];

    // Set the modal's content
    document.getElementById('name').innerHTML = data.title;
    document.getElementById('author').innerHTML = data.author;
    document.getElementById('link').href = data.link;
    document.getElementById('description').innerHTML = data.description;

    // Show the modal
    document.getElementById('modal').style.display = 'block';
  }
});

// Add a close button to the modal
document.getElementById('close').addEventListener('click', function() {
  // Hide the modal
  document.getElementById('modal').style.display = 'none';
});

// Add a search bar to the map
var searchBar = new mapboxgl.SearchControl({
  input: document.getElementById('search')
});

// Add a way for users to zoom in and out of the map
map.on('zoom', function() {
  document.getElementById('zoom').innerHTML = map.getZoom();
});

// Add a way for users to pan the map
map.on('move', function() {
  var center = map.getCenter();
  document.getElementById('lat').innerHTML = center.lat;
  document.getElementById('lng').innerHTML = center.lng;
});