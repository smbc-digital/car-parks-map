const carparksPopup = (feature, layer) => {
  
  const content = `<div class="item">
  <i class="fa fa-product-hunt" aria-hidden="true"></i>
  <p class="title">Car Parks</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Postcode: ${feature.properties.post_code}</p>
  <p class="info">RingGo Zone: ${feature.properties.ringgo_zone}</p>
  <p class="info">Spaces: ${feature.properties.total_capacity}</p>
  <p class="info">Disabled Spaces: ${feature.properties.disabled_spaces}</p>
  <p class="info">Parent and Child Spaces: ${feature.properties.parent_child_spaces}</p>
  <p class="info">Electric Vehicle Spaces: ${feature.properties.electric_vehicle_spaces}</p>
  <p class="info">Height Restriction: ${feature.properties.height_restriction_m}</p>
  <p class="info">Park Mark: ${feature.properties.park_mark}</p>
  </div>`
 
  layer.bindPopup(content)
 }

 export {
  carparksPopup
}