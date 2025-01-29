import { fetchWeatherData } from '@/lib/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface WeatherState {
    weather: any | null;
    error: string | null;
    loading: boolean;
}

const initialState: WeatherState = {
    weather: null,
    error: null,
    loading: false
};

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city: string, { rejectWithValue }) => {
        try {
            const data = await fetchWeatherData(city);
            return data;
        } catch (error) {
            return rejectWithValue("City Not Found");
        }
    }
);

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
                state.error = null;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.weather = null;
                state.error = action.payload as string;
            });
    }
});

export const { setError } = weatherSlice.actions;
export default weatherSlice.reducer;
