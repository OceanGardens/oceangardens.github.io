import netCDF4 as nc
import pandas as pd

nc_file = nc.Dataset('../AQUA_MODIS.20231005.L3m.DAY.CHL.chlor_a.4km.NRT.nc', 'r')

'''
variable_names = list(nc_file.variables.keys())
for var_name in variable_names:
    print(var_name)

nc_file.close()
exit(0)
'''

latitude = nc_file.variables['lat'][:]
longitude = nc_file.variables['lon'][:]
crolofila = nc_file.variables['chlor_a'][:]

print(nc_file.variables['palette'][:])
print(crolofila)

#df = pd.DataFrame({'Latitude': latitude, 'Longitude': longitude, 'Crolofila': crolofila})

#df.to_csv('placton-plot.csv', index=False)

nc_file.close()
