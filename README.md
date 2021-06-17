# eleMap
## _Switzerlands easy car-charging map_

evMap is a simple web-based app with the goal to use OpenData in a useful way. Using the live map of the Swiss Confederation (Map of Switzerland) and the information it contains on electric charging stations for EVs (electronic vehicles), evMap can display an overview including the current station status. Via the intuitive and clean interface it is possible to display information about the location as well as the operator or the plug(s). The information comes from the OpenData catalog of the Swiss Federal Office of Energy.


## Features
- 2D and 3D Map provided by Maps of Switzerland
- Station-Details including Availability, Provider, Navigation (using Google or Apple Maps) and Contact-Details from the Provider
- Live-Map-Data provided by Federal Office of Energy and the Station-Providers
- Report-Feature to report problems directly to the developer or the BFE.
- Easy and intuitive User-Interface built for just one thumb.

## Known Issues
- Geolocation not working at the moment
  - The used Federal Map Service should locate the user automatically but there are currently problems by getting this result.
  - We're working on it.
- Necessary Informations
  - It is not 100% clear, what data is useful and what not. Therefore evMap just contains some (hopefully) useful data for a beta release.
  

## Copyright and Licensing
The source code may be reused under the following conditions: The source specification of the individual components as well as the data sources is obligatory. Commercial use of the data of the Swiss Federal Office of Energy is only permitted with its approval. The further development or adaptation of the app source code is only permitted with the permission of the developer.

## Data-Licensing
Please take note that the Data provided by the Federal Office of Energy is part of the Federal Open-Data-Project. In addition to this keep in mind, that the displayed map is a simple iFrame and can be deactivated by the authorities at all time.
Live-Data including the availability and contact-data gets fetched by the free and open API. To learn more about this project, visit https://github.com/SFOE/DIEMO-Documentation
