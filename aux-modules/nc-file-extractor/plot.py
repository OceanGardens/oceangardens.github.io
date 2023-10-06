import numpy as np
import netCDF4 as nc
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy.feature as cfeature

# Open the .nc file
nc_file = nc.Dataset('../AQUA_MODIS.20231005.L3m.DAY.CHL.chlor_a.4km.NRT.nc', 'r')

# Get the latitude and longitude data
latitude = nc_file.variables['lat'][:]
longitude = nc_file.variables['lon'][:]

# Get the chlorophyll-a concentration data
chlorophyll_a = nc_file.variables['chlor_a'][:]  # Replace 'chlorophyll_a' with the actual variable name

# Close the .nc file
nc_file.close()

# Create a contour plot
plt.figure(figsize=(10, 8))
ax = plt.axes(projection=ccrs.PlateCarree())
plt.contourf(longitude, latitude, chlorophyll_a, cmap='viridis', transform=ccrs.PlateCarree())
plt.colorbar(label='Chlorophyll-a Concentration (µg/L)')
ax.add_feature(cfeature.COASTLINE)
ax.set_title('Chlorophyll-a Concentration')

# Show the plot
plt.show()
