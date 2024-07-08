---
description: >-
  In this section, we will describe the example of sending an object to the
  endpoint.
---

# Endpoint

### Example about URI Endpoint of the `ajarns` Object

Adding the staff name and details arrays into the `ajarns` object can be performed by send a <mark style="color:orange;">`POST`</mark> action `/add-staff` endpoint. After post the object via the endpoint, you will get the res action from the server containing the details about the staff you added and default `profile_img` is also added automatically due to the <mark style="color:purple;">`formatDatatoSendAjarn`</mark> function.

```javascript
const formatDatatoSendAjarn = (ajarn) => {    

    return {       
        profile_img: ajarn.personal_info.profile_img,
        username: ajarn.personal_info.username,
        fullname: ajarn.personal_info.fullname,
        dept: ajarn.personal_info.dept 
        
    }
}
```

When the <mark style="color:orange;">`POST`</mark> action performed, you will get the JSON format of the ajarn value back as a return value. And this is the result showing that the array is stored in the database completely. The example shown above is just to show how the <mark style="color:orange;">`POST`</mark> action and endpoint works in the flow.

### <mark style="color:red;">WARNING</mark> About the `/add-staff` Endpoint and `ajarns` Collection

Due to the security reasons of `/add-staff` endpoint, we recommends you better not <mark style="color:orange;">`POST`</mark> the data to that endpoint by sending the array object directly to the endpoint. Also, the `ajarns` object in the collection contains the faculty staff lists and is strictly prohibited from conducting any actions.

{% hint style="danger" %}
DO NOT PERFORM ANY ACTION IN THE `ajarns` OBJECT WITHOUT PERMISSIONS
{% endhint %}
