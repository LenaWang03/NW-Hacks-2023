import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ubcPoints = [
  {
    location: [49.268688, -123.252112],
    name: "Brock Hall, Room 1040, 1874 East Mall",
    mapLink : "https://www.google.com/maps?ll=49.268688,-123.252112&z=14&t=m&hl=en-US&gl=CA&mapclient=embed&q=Brock+Hall+1874+E+Mall+Vancouver,+BC+V6T+1Z1"
  },
  {
    location: [49.267306, -123.251774],
    name: "Counselling Services Annex, 1930 East Mall",
    mapLink: "https://maps.google.com/maps?ll=49.267306,-123.251774&z=14&t=m&hl=en&gl=CA&mapclient=embed&q=1930%20E%20Mall%20Vancouver%2C%20BC"
  },
  {
    location: [49.2664779,-123.2636824],
    name: "AMS Peer Support",
    mapLink: "https://www.google.com/maps/place/AMS+Peer+Support/@49.2664779,-123.2636824,15z/data=!4m2!3m1!1s0x5486739452dbd6ff:0x2793042af0621cc5"
  }
];

const points = [
  {
    location: [49.253560, -123.236050],
    name: "All Brains Clinic, 5933 Birney Ave, Vancouver, BC V6S 0G7",
    mapLink: "https://www.google.com/maps/place/All+Brains+Clinic/data=!4m7!3m6!1s0x548673eb416dcfb9:0x9eb575718bbf2257!8m2!3d49.2535488!4d-123.235644!16s%2Fg%2F11jzp5kwtn!19sChIJuc9tQetzhlQRVyK_i3F1tZ4?authuser=0&hl=en&rclk=1"
  },
  {
    location: [49.263770, -123.165850],
    name: "Mary Murphy counselling, 2678 W Broadway #203B, Vancouver, BC V6K 2G3",
    mapLink: "https://www.google.com/maps/place/Mary+Murphy+counselling,+2678+W+Broadway+%23203B,+Vancouver,+BC+V6K+2G3/@49.2450602,-123.2107865,13z/data=!4m6!3m5!1s0x54867345f1764331:0x64ad96a0989c83e2!8m2!3d49.2637933!4d-123.165893!16s%2Fg%2F11fkpt8htr"
  },
  {
    location: [49.232422, -123.156067],
    name: "Vancouver Coastal Health - Mental Health Team - Kitsilano-Fairview, 2110 W 43rd Ave, Vancouver, BC V6M 2E1",
    mapLink: "https://www.google.com/maps/place/Vancouver+Coastal+Health+-+Mental+Health+Team+-+Kitsilano-Fairview/@49.2326214,-123.1560084,15z/data=!4m2!3m1!1s0x0:0xab5dd5b296e4b9db?sa=X&ved=2ahUKEwjOgayM4tr8AhVkLzQIHYkvCzcQ_BJ6BAhAEAg"
  },
  {
    location: [49.239630, 123.121990],
    name: "BC Mental Health & Substance Use Services, 4949 Heather St, Vancouver, BC V5Z 3L7",
    mapLink: "https://www.google.com/maps?sxsrf=AJOqlzXTNtItwbGQfujy4HfBqSJEowV2Mg:1674376511736&q=BC+Mental+Health+%26+Substance+Use+Services&gsas=1&lsig=AB86z5V4ljtVc_weo46ilVBg5Imy&biw=1440&bih=768&dpr=2&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjM8PHL4tr8AhXBLH0KHX9VB_EQ_AUoAnoECAEQBA"
  },
  {
    location: [49.279230, 123.128400],
    name: "MindRight Counselling & Consulting, 1160 Burrard St #601, Vancouver, BC V6Z 2E8",
    mapLink: "https://www.google.com/maps/place/MindRight+Counselling+%26+Consulting/@49.1268495,-123.0972838,15z/data=!4m2!3m1!1s0x0:0x83d16734dd9b6984?sa=X&ved=2ahUKEwjyr4Oe49r8AhWMATQIHUEtCKgQ_BJ6BAg_EAg"
  },
  {
    location: [49.249180, -123.115000],
    name: "B C West Side Mental Health, 4088 Cambie St, Vancouver, BC V5Z 2X8",
    mapLink: "https://www.google.com/maps/place/B+C+West+Side+Mental+Health/@49.2490953,-123.1554219,14z/data=!4m9!1m2!2m1!1smental+health+service!3m5!1s0x548673f243328ddd:0x10c8bbe3b3f5e598!8m2!3d49.2492913!4d-123.1149802!15sChVtZW50YWwgaGVhbHRoIHNlcnZpY2WSARVtZW50YWxfaGVhbHRoX3NlcnZpY2XgAQA"
  }
]

const MyMarkers = ({ data }) => {
  return data.map(({ lat, lng, title }, index) => (
    <Marker key={index} position={{ lat, lng }}>
      <Popup>{title}</Popup>
    </Marker>
  ));
};

const position = [49.268688, -123.252112];
const Map = () => {
  return (
    <MapContainer
      className="markercluster-map"
      center={position}
      zoom={15}
      maxZoom={18}
      style={{ width: "75vw", height: "50em", border: '1px solid black', padding: '3em', 
    margin: "5em 0 5em"}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ubcPoints.map((point) => {
        return (
          <Marker position={point.location}>
            <Popup>
              {point.name} <br/>
              <a href={point.mapLink} target="_blank">map</a>
            </Popup>
          </Marker>
        );
      })}
      {points.map((point) => {
        return (
          <Marker position={point.location}>
            <Popup>
              {point.name} <br/>
              <a href={point.mapLink} target="_blank">map</a>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
