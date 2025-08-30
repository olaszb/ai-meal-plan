"use client";

interface MealPlanInput {
  dietType: string;
  calories: number;
  allergies: string;
  cuisine: string;
  snacks: string;
  days?: number;
}

export default function MealPlanDashboard() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload: MealPlanInput = {
      dietType: formData.get("dietType")?.toString() || "",
      calories: Number(formData.get("calories")) || 2000,
      allergies: formData.get("allergies")?.toString() || "",
      cuisine: formData.get("cuisine")?.toString() || "",
      snacks: formData.get("snacks")?.toString() || "",
      days: 7,
    };

    console.log(payload);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-zinc-900 shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/3 lg:w-1/4 p-6 bg-emerald-500 text-white">
          <h1 className="text-2xl font-bold mb-6 text-center">
            AI Meal Plan Generator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="dietType"
                className="block text-sm font-medium mb-1"
              >
                Diet Type
              </label>
              <input
                type="text"
                id="dietType"
                name="dietType"
                required
                className="w-full px-3 py-2 border border-emerald-300 bg-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="e.g. Vegeterian, Vegan, Keto, Mediterranean..."
              />
            </div>

            <div>
              <label
                htmlFor="calories"
                className="block text-sm font-medium mb-1"
              >
                {" "}
                Daily Calorie Goal
              </label>
              <input
                type="number"
                id="calories"
                name="calories"
                required
                className="w-full px-3 py-2 border border-emerald-300 bg-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                min={500}
                max={5000}
                placeholder="e.g. 2000"
              />
            </div>

            <div>
              <label
                htmlFor="allergies"
                className="block text-sm font-medium mb-1"
              >
                {" "}
                Allergies{" "}
              </label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                required
                className="w-full px-3 py-2 border border-emerald-300 bg-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="e.g. Nuts, Dairy, None..."
              />
            </div>

            <div>
              <label
                htmlFor="cusinie"
                className="block text-sm font-medium mb-1"
              >
                {" "}
                Preferred Cuisine{" "}
              </label>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                required
                className="w-full px-3 py-2 border border-emerald-300 bg-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="e.g. Italian, Chinese, No Preference..."
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="snacks"
                name="snacks"
                className="h-4 w-4 text-emerald-300 border-emerald-300 rounded"
              />
              <label htmlFor="snacks" className="ml-2 block text-sm text-white">
                Include Snacks
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors border-white border-1"
              >
                Generate Meal Plan
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 p-6 bg-zinc-800">
          <h2 className="text-2xl font-bold mb-6 text-emerald-700">
            Weekly Meal Plan
          </h2>
        </div>
      </div>
    </div>
  );
}
