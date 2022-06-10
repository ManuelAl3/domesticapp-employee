import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { useAuth } from "../../context/auth-context";
import { showReviews } from "../../services/reviews-service";

function ReviewsScreen({ navigation }) {
  const { user } = useAuth();
  const [ reviews, setReviews] = React.useState(null);

  const paintStar = (cantidad) => {
    let starts = [];
    for (let i = 0; i < cantidad; i++) {
      starts.push(<Image key={i} source={faStar} style={{width: 40, height: 40, color: "#FFC107"}}  />);
    }
    return starts;
  };
  React.useEffect(() => {
    showReviews(user.id).then(setReviews);
  }, [user.id])
  return (
    <>
    <BackTitledHeader title="Mis reseñas" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {
      reviews ? (
        <>
          <Text>Reseñas(5)</Text>
          {
            reviews.map((review)=>(
              <>
              <Image 
                style={{width: 40, height: 40}}
                source={user.image_url}
              />
                <Text>{review.full_name}</Text>
                <Text>{review.body}</Text>
                {paintStar(review.score)}
              </>
            ))
          }
        </>
      ) : (
        <>
          <Text>No tienes reseñas aún</Text>
        </>
      )
    }
      
    </View>
    </>
  );
}

export default ReviewsScreen;