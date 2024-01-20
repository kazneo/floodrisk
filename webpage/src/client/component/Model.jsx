export default function Model ({ hidden }){
    return(
        <section id="model" hidden={hidden}>
          <h3>Model used to train and predict</h3>
          <p>
            We use a machine learning algorithm known as a Random Forest, XGBoosting, K-Nearest Neighbors Regression (KNN), Support Vector Regression (SVR), 
            and Multivariate Regression to train our model and make predictions. 
            Random Forest is a powerful algorithm that uses multiple decision trees to make predictions, and is well-suited to 
            handling large and complex data sets. 
            XGBoosting is algorithm that optimize gradient boosting algorithm that can handle both classification and regression problems.
            KNN finds K closest data points to a given point in the training set and using their average as the predicted value.
            SVR works by finding a hyperplane that maximizes the margin between the predicted values and the actual values.
            Multivariate Regression is statistical method that helps us understand the relationship between a dependent variable and multiple independent variables.
          </p>
      </section>
    );
}