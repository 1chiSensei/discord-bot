(require '[clojure.core.async    :as a])
(require '[discljord.connections :as c])
(require '[discljord.messaging   :as m])

(def token      "TOKEN")
(def channel-id "12345")

(let [event-ch      (a/chan 100)
      connection-ch (c/connect-bot! token event-ch)
      message-ch    (m/start-connection! token)]
  (try
    (loop []
      (let [[event-type event-data] (a/<!! event-ch)]
        (when (and (= :message-create event-type)
                   (= (:channel-id event-data) channel-id)
                   (not (:bot (:author event-data))))
          (m/create-message! message-ch channel-id :content "Hello, World!"))
        (when (= :channel-pins-update event-type)
          (c/disconnect-bot! connection-ch))
        (when-not (= :disconnect event-type)
          (recur))))
    (finally
      (m/stop-connection! message-ch)
      (a/close!           event-ch))))
      
