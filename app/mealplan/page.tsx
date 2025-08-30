export default function MealPlanDashboard() {
  return (
    <div>
      <div>
        <div>
          <h1> AI Meal Plan Generator</h1>
          <form>
            <div>
              <label htmlFor="dietType"> Diet Type</label>
              <input
                type="text"
                id="dietType"
                required
                placeholder="e.g. Vegeterian, Vegan, Keto, Mediterranean..."
              />
            </div>

            <div>
              <label htmlFor="calories"> Daily Calorie Goal</label>
              <input
                type="number"
                id="calories"
                required
                min={500}
                max={15000}
                placeholder="e.g. 2000"
              />
            </div>

            <div>
              <label htmlFor="allergies"> Allergies </label>
              <input
                type="text"
                id="allergies"
                required
                placeholder="e.g. Nuts, Dairy, None..."
              />
            </div>

            <div>
              <label htmlFor="cusinie"> Preferred Cuisine </label>
              <input
                type="text"
                id="cuisine"
                required
                placeholder="e.g. Italian, Chinese, No Preference..."
              />
            </div>

            <div>
              <input type="checkbox" id="snacks" />
              <label htmlFor="snacks"> Include Snacks </label>
            </div>

            <div>
              <button type="submit"> Generate Meal Plan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
