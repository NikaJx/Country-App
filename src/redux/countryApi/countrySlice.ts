import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICountry } from "../../models/country.type";

interface ICountryApp {
    countrys: ICountry[],
    isLoading: boolean,
    error: string | null,
    singlePageCountry: ICountry | undefined
}

const initialState: ICountryApp = {
    countrys: [],
    isLoading: false,
    error: '',
    singlePageCountry: undefined
}

export const getAllCountrys = createAsyncThunk<ICountry[], undefined, { rejectValue: string | unknown }>('country/getAllCountrys', 
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('https://restcountries.com/v3.1/all');

            if(!res.ok) throw new Error('server Error');

            const data: ICountry[] = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error);
        }
});

export const searchCountry = createAsyncThunk<ICountry[], string, { rejectValue: string | unknown }>('country/searchCountry', 
    async (countryName, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

            if(!res.ok) throw new Error('Not Found any country');

            const data: ICountry[] = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const singleCountry = createAsyncThunk<ICountry, string, { rejectValue: string | unknown }>('country/singleCountry', 
    async (countryName, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

            if(!res.ok) throw new Error('Not Found any country');

            const data: ICountry = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const filterCountry = createAsyncThunk<ICountry[], string, { rejectValue: string | unknown }>('country/filterCountry', 
    async (regionName, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${regionName}`);

            if(!res.ok) throw new Error('Not Found Region');

            const data: ICountry[] = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const countrySlice = createSlice({
    name: 'country',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCountrys.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllCountrys.fulfilled, (state, action: PayloadAction<ICountry[]>) => {
                state.isLoading = false;
                state.error = null;
                state.countrys = action.payload;
            })

            .addCase(searchCountry.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchCountry.fulfilled, (state, action: PayloadAction<ICountry[]>) => {
                state.isLoading = false;
                state.error = null;
                state.countrys = action.payload;
            })

            .addCase(filterCountry.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(filterCountry.fulfilled, (state, action: PayloadAction<ICountry[]>) => {
                state.isLoading = false;
                state.error = null;
                state.countrys = action.payload;
            })

            .addCase(singleCountry.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(singleCountry.fulfilled, (state, action: PayloadAction<ICountry>) => {
                state.isLoading = false;
                state.error = null;
                state.singlePageCountry = action.payload;
            })
    }
});

export default countrySlice.reducer