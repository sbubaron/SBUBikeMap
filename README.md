This is a migration of the Bike Rack Map which originally used the Bing Maps 6.2 API. 
This API will be discontinued on July 31st 2017. On that date all Apps must move to v8.
I have rewritten the code to use the new API classes. I followed this guide: 
https://social.technet.microsoft.com/wiki/contents/articles/34568.bing-maps-v6-3-to-v8-migration-guide.aspx

You will need to generate and provide a Bing Maps API Key at: https://www.bingmapsportal.com/Announcement?redirect=True

The awkard part is there isn't a great way to protect the key -- you can attempt to obfuscate it, 
but ultimately the key is stored inside the client-side JS. 

Microsoft themselves state there isn't any way to (or need to) protect the key: 
https://social.msdn.microsoft.com/Forums/en-US/590ef7a8-7386-4a00-a155-722dc74c57ea/bing-maps-enterprise-key?forum=bingmaps
