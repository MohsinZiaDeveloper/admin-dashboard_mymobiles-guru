import { MobileAction } from "./actionsTypes";

const initialState = {
  mobileList: [
    {
      id: 1,
      RAM_ROM: "8GB",
      BrandName: "Samsung",
      age: 35,
      Condition: "Good",
      Price: "25k",
      Location: "Islamabad",
      ContactNo: "+92987654098",
    },
    {
      id: 2,
      RAM_ROM: "16Gb",
      BrandName: "Oppo",
      age: 35,
      Condition: "Moderate",
      Price: "25k",
      Location: "Islamabad",
      ContactNo: "+92987654098",
    },
    {
      id: 3,
      RAM_ROM: "8GB",
      BrandName: "Iphone",
      age: 35,
      Condition: "Excellent",
      Price: "125k",
      Location: "Rawalpindi",
      ContactNo: "+929098765498",
    },
    {
      id: 4,
      RAM_ROM: "4GB",
      BrandName: "infinix",
      age: 35,
      Condition: "Good",
      Price: "5k",
      Location: "Lahore",
      ContactNo: "+929345654098",
    },
    {
      id: 5,
      RAM_ROM: "4/8GB",
      BrandName: "Infinix",
      age: 35,
      Condition: "Moderate",
      Price: "42k",
      Location: "Multan",
      ContactNo: "+9276543098",
    },
    {
      id: 6,
      RAM_ROM: "8/16GB",
      BrandName: "Vivo",
      age: 35,
      Condition: "Poor",
      Price: "15k",
      Location: "Rawalpindi",
      ContactNo: "+92098765438",
    },
  ],
  mobileInfo: {},
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case MobileAction.ADD_MOBILE: {
      console.log("action", action.payload);
      const newData = state.mobileList;
      // const {payload:{RamRom,}}=action;
      const data = {
        id: newData.length + 1,
        RAM_ROM: action.payload.RamRom,
        BrandName: action.payload.BrandName,
        age: action.payload.age,
        Condition: action.payload.condition,
        Price: action.payload.Price,
        Location: action.payload.Location,
        ContactNo: action.payload.ContactNo,
      };
      console.log("AddMobile Dispatch", action.payload);
      return {
        ...state,
        mobileList: [...newData, data],
      };
    }
    case MobileAction.DELETE_MOBILE: {
      console.log("delete Dispatch", action.payload);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
export default mobileReducer;
