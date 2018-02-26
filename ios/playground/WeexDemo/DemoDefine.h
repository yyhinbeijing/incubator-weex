/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

#import <Foundation/Foundation.h>

#define CURRENT_IP [NSString stringWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"localServer-ip" ofType:@".txt"] encoding:NSUTF8StringEncoding error:nil]

#if TARGET_IPHONE_SIMULATOR
    #define DEMO_HOST @"10.185.240.85"
#else
    #define DEMO_HOST CURRENT_IP
#endif

#define DEMO_URL(path) [NSString stringWithFormat:@"http://%@:8080/%s", DEMO_HOST, #path]

#define HOME_URL [NSString stringWithFormat:@"http://%@:8080/examples/build/vue/index.js", DEMO_HOST]

//#define DEMO_URL(path) [NSString stringWithFormat:@"http://%@:12580/%s", DEMO_HOST, #path]
//
//#define HOME_URL [NSString stringWithFormat:@"http://%@:12580/examples/build/vue/index.js", DEMO_HOST]
#define BUNDLE_URL [NSString stringWithFormat:@"file://%@/bundlejs/landing.weex.js",[NSBundle mainBundle].bundlePath]

//#define BUNDLE_URL [NSString stringWithFormat:@"file://%@/bundlejs/landing.weex.js",[NSBundle mainBundle].bundlePath]

//#define BUNDLE_URL @"https://distribute.secoo.com/weex/textNews.js"
//@"/var/mobile/Containers/Data/Application/168307C2-6FE3-4A5E-8E8A-B816A84575C1/Documents/myfile.js"
//@"/var/mobile/Containers/Data/Application/88D58F17-DD20-491B-A44E-BA5AB66E472B/Documents/myfile.txt"
//@"https://distribute.secoo.com/weex/promotionList.js"
//DEMO_URL(@"https://distribute.secoo.com/weex/promotionList.js")
//@"https://distribute.secoo.com/weex/promotionList.js"
//[NSString stringWithFormat:@"file://%@/bundlejs/landing.weex.js",[NSBundle mainBundle].bundlePath]
//[NSString stringWithFormat:@"file://%@/bundlejs/promotionListsec.js",[NSBundle mainBundle].bundlePath]
//promotionList /var/mobile/Containers/Data/Application/CEDAA0A2-C5E4-45C5-B35B-95B77BBCD557/Documents/myfile.txt
//@"https://distribute.secoo.com/weex/promotionList.js"
//@"https://distribute.secoo.com//weex//index.js"
//[NSString stringWithFormat:@"file://%@/bundlejs/index.js",[NSBundle mainBundle].bundlePath]



#define UITEST_HOME_URL @"http://test?_wx_tpl=http://localhost:8080/test/build/TC__Home.js"

#define QRSCAN  @"com.taobao.WeexDemo.scan"
#define QRSCAN_HISTORY  @"com.taobao.WeexDemo.scan.history"
#define WEEX_COLOR [UIColor colorWithRed:0.27 green:0.71 blue:0.94 alpha:1]
#define WX_SCANNER_HISTORY @"wx_scanner_history"
