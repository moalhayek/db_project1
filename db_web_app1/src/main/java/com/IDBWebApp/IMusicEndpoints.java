package com.IDBWebApp;

import java.util.List;

public class IMusicEndpoints {
    public class IMusic {
        public String ageGroup;
        public String genre;
        public String listeners;
    }
    public class IMusicResult{
        public List<IMusic> musicAgeData;
    }
}
