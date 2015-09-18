# Blog Address

<http://blog.rainyalley.com/>


# Must Modify

## 1.swiftype

This service is to provide on-site search function

Service address： <https://swiftype.com/>

After the completion of the set， you need to modify the `swiftype_searchId` in `_config.yml`


## 2.disqus

This service is to provide comment function

Service address： <https://disqus.com/>

After the completion of the set， you need to modify the `disqus_shortname` in `_config.yml`


# Other

The `imgrepo` in `_config.yml` is a images repository.

The reason of this setting is that all the images can easily migrate to other photo storage service.

So, in your article you can refer image like this '{{"/rmi.jpg" | prepend: site.imgrepo }}'.



