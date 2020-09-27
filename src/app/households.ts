export const households = [
{
    "_embedded" : {
      "households" : [ {
        "name" : "Mak`s house",
        "address" : "4518 S Willow Dr",
        "_links" : {
          "self" : {
            "href" : "http://localhost:8080/households/1"
          },
          "household" : {
            "href" : "http://localhost:8080/households/1"
          }
        }
      }, {
        "name" : "Allan`s house",
        "address" : "5004 Deer Dr",
        "_links" : {
          "self" : {
            "href" : "http://localhost:8080/households/2"
          },
          "household" : {
            "href" : "http://localhost:8080/households/2"
          }
        }
      } ]
    },
    "_links" : {
      "self" : {
        "href" : "http://localhost:8080/households"
      },
      "profile" : {
        "href" : "http://localhost:8080/profile/households"
      },
      "search" : {
        "href" : "http://localhost:8080/households/search"
      }
    }
  }
];