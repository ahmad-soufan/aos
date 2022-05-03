//var DataSource = 'https://restcountries.com/v3.1/all'
var countries = document.getElementById('countries');
var flags = document.getElementById('flags');
var datatoRead = fetch('https://restcountries.com/v3.1/all')
                    .then(x => x.json())
                     .then(data => {
                          data.forEach(e => {
                              var country = document.createElement('option');
                              country.innerHTML = e.idd.root + e.idd.suffixes +' | '+ e.name.common + ' - ' + e.capital;
                              countries.appendChild(country);

                              var flag = document.createElement('img')
                              flag.src=e.flags.png;
                              flags.appendChild(flag);
                          });                      
                     })